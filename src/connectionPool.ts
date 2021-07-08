import { ConnectConfig, ConnectConfigs, Connectors, dbType, mysqlConfig } from "./models";

const fs = require('fs');
const mysql = require('mysql');

/**
 * 连接池类
 */
class ConnectionPool {
  private connectors = {};
  private connectCount = 0; // 连接线程自增ID

  /**
   * 获取连接ID
   * @returns 
   */
  public getConnectCount = () => {
    this.connectCount += 1;
    return this.connectCount;
  }

  constructor(configPath: string) {
    this.init(configPath);
  }

  /**
   * 初始化连接池
   */
  private init = (configPath: string) => {
    if (!fs.existsSync(configPath) || !fs.statSync(configPath).isFile()) {
      throw new Error(`文件${configPath}不存在`);
    }
    try {
      const configs = JSON.parse(fs.readFileSync(configPath).toString());
      Object.keys(configs).forEach((key: string) => {
        this.connectors[key] = {
          config: configs[key],
          usedPools: [],
          unUsedPools: [this.addConnector(configs[key])],
        };
      });
      console.log('连接建立成功');
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * 新增连接
   * @param config 
   * @returns
   */
  public addConnector = (config: ConnectConfig) => {
    switch (config.dbType) {
      case dbType.mysql: {
        const connection = mysql.createConnection({
          ...<mysqlConfig>config,
        });
        connection.connect();
        connection.id = this.getConnectCount();
        return connection;
      };
      default: null;
    }
  }
}

export default ConnectionPool;