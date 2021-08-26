import ConnectPool from './connectPool';

class MingDBC {
  private connectPool: ConnectPool;
  constructor (configPath: string) {
    this.connectPool = new ConnectPool(configPath);
  }
};

export default MingDBC;