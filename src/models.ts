/**
 * mysql连接配置
*/
export interface mysqlConfig {
  host: string,
  port: number,
  user: string,
  password: string,
  database?: string,
  charset?: string,
  timezone?: string,
  connectTimeout?: number,
  supportBigNumbers?: boolean,
  bigNumberStrings?: boolean,
  dateStrings?: boolean,
  multipleStatements?: boolean,
}
/**
 * 数据库类型枚举
*/
export enum dbType {mysql, redis, oracle, sqlserver};

/**
 * 连接配置
*/
export interface ConnectConfig extends mysqlConfig {
  dbType: dbType,
  maxConnectNum?: number,
  queryTimeOut?: number,
  inactiveTimeout?: number,
};

/**
 * 多个连接配置
*/
export interface ConnectConfigs {
  [key: string]:  ConnectConfig,
};

/**
 * 连接池配置
 */
export interface ConnectPool {
  connector: any,
  lastQueryStartTime: number,
  lastQueryEndTime: number,
}

/**
 * 所有连接点对象
 */
export interface Connectors {
  config: ConnectConfig,
  usedPools: ConnectPool[],
  unUsedPools: ConnectPool[]
};
