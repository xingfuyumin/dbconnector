type Options = {
  host: string;
  port: number;
  localAddress: string;
  socketPath: string;
  user: string;
  password: string;
  database: string;
  charset: string;
  timezone: string;
  connectTimeout: number;
  stringifyObjects: boolean;
  insecureAuth: boolean;
  typeCast: boolean;
  queryFormat: (query: string, values: any) => string;
  supportBigNumbers: boolean;
  bigNumberStrings: boolean;
  dateStrings: boolean;
  debug: boolean;
  trace: boolean;
  localInfile: boolean;
  multipleStatements: boolean;
  flags: string;
  ssl: any;
};

export default Options;