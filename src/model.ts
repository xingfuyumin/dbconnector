import { MysqlConfig } from "./mysql/model";

/**
 * 连接配置
*/
export interface Config extends MysqlConfig {
  dbType: 'mysql' | 'redis' | 'oracle' | 'sqlserver',
  maxConnectNum?: number,
  queryTimeOut?: number,
  inactiveTimeout?: number,
  reconnectInterval?: number | 30000, // 重连间隔
};

/**
 * 多个连接配置
*/
export interface Configs {
  [key: string]:  Config,
};

/**
 * 连接池配置
 */
export interface Pool {
  connector: any,
  lastQueryStartTime: number,
  lastQueryEndTime: number,
}

/**
 * 所有连接点对象
 */
export interface Connector {
  config: Config,
  usedPools: Pool[],
  unUsedPools: Pool[]
};
