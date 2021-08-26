import { defaultMysqlConfig, MysqlConfig } from "./model";

const mysql = require('mysql');

/**
 * 新增连接
 * @param config 
 * @returns
 */
export const addMysqlConnector = (name: string, config: MysqlConfig = defaultMysqlConfig) => {
  try {
    const connection = mysql.createConnection({
      ...config,
    });
    connection.connect();
    console.info(`${name}连接成功`);
    connection.query('SELECT 1 + 1 AS solution', function (error: any, results: { solution: any; }[]) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    return connection;
  } catch(e) {
    console.error(`${name}连接失败`, e);
    return null;
  }
}