import Pool from './pool';
import MysqlOriginalOptions from './mysql';

export type MysqlOptions = MysqlOriginalOptions & {
  pool: Pool;
  dbType: 'mysql'
}

export type Config = {
  [connName: string]: MysqlOptions;
}