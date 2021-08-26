import { Config } from "./model";
import { addMysqlConnector } from "./mysql";

const fs = require('fs');

/**
 * 连接池
 */
class ConnectPool {
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
      console.error(`文件${configPath}不存在`);
    }
    const configs = JSON.parse(fs.readFileSync(configPath).toString());
    Object.keys(configs).forEach((name: string) => {
      const config: Config = configs[name];
      this.addConnector(name, config, 0);
    });
  }

  /**
   * 新增连接
   * @param config 
   * @returns
   */
  public addConnector = (name: string, config: Config, count: number = 0) => {
    let connecter = null;
    switch (config.dbType) {
      case 'mysql': {
       connecter = addMysqlConnector(name, config);
       break;
      };
      default: {
        console.warn(`${name}的dbType未配置或配置不正确`);
        return;
      };
    }
    if (connecter == null) {
      if (count > 0) {
        console.warn(`${name}连接失败，正在重试第${count + 1}次`);
      } else {
        console.warn(`${name}连接失败`);
      }
      setTimeout(() => {
        this.addConnector(name, config, count + 1);
      }, config.reconnectInterval || 30000);// 重试连接
    } else {
      this.connectors[name] = {
        config: config,
        usedPools: [],
        unUsedPools: [connecter],
      };
    }
  }
}

export default ConnectPool;