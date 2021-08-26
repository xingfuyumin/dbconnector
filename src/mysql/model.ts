/**
 * mysql连接配置
*/
export interface MysqlConfig {
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

export const defaultMysqlConfig: MysqlConfig = {
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root',
}