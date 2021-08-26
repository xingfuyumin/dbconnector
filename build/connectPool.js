"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("./mysql");
var fs = require('fs');
/**
 * 连接池
 */
var ConnectPool = /** @class */ (function () {
    function ConnectPool(configPath) {
        var _this = this;
        this.connectors = {};
        this.connectCount = 0; // 连接线程自增ID
        /**
         * 获取连接ID
         * @returns
         */
        this.getConnectCount = function () {
            _this.connectCount += 1;
            return _this.connectCount;
        };
        /**
         * 初始化连接池
         */
        this.init = function (configPath) {
            if (!fs.existsSync(configPath) || !fs.statSync(configPath).isFile()) {
                console.error("\u6587\u4EF6" + configPath + "\u4E0D\u5B58\u5728");
            }
            var configs = JSON.parse(fs.readFileSync(configPath).toString());
            Object.keys(configs).forEach(function (name) {
                var config = configs[name];
                _this.addConnector(name, config, 0);
            });
        };
        /**
         * 新增连接
         * @param config
         * @returns
         */
        this.addConnector = function (name, config, count) {
            if (count === void 0) { count = 0; }
            var connecter = null;
            switch (config.dbType) {
                case 'mysql':
                    {
                        connecter = mysql_1.addMysqlConnector(name, config);
                        break;
                    }
                    ;
                default:
                    {
                        console.warn(name + "\u7684dbType\u672A\u914D\u7F6E\u6216\u914D\u7F6E\u4E0D\u6B63\u786E");
                        return;
                    }
                    ;
            }
            if (connecter == null) {
                if (count > 0) {
                    console.warn(name + "\u8FDE\u63A5\u5931\u8D25\uFF0C\u6B63\u5728\u91CD\u8BD5\u7B2C" + (count + 1) + "\u6B21");
                }
                else {
                    console.warn(name + "\u8FDE\u63A5\u5931\u8D25");
                }
                setTimeout(function () {
                    _this.addConnector(name, config, count + 1);
                }, config.reconnectInterval || 30000); // 重试连接
            }
            else {
                _this.connectors[name] = {
                    config: config,
                    usedPools: [],
                    unUsedPools: [connecter],
                };
            }
        };
        this.init(configPath);
    }
    return ConnectPool;
}());
exports.default = ConnectPool;
