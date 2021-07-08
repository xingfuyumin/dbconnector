import ConnectionPool from './connectionPool';

class MingDBConnector {
  private connectionPool: ConnectionPool;
  constructor (configPath: string) {
    this.connectionPool = new ConnectionPool(configPath);
  }
};