"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var fs = require('fs');
var mysql = require('mysql');
/**
 * 连接池类
 */
var ConnectionPool = /** @class */ (function () {
    function ConnectionPool(configPath) {
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
                throw new Error("\u6587\u4EF6" + configPath + "\u4E0D\u5B58\u5728");
            }
            try {
                var configs_1 = JSON.parse(fs.readFileSync(configPath).toString());
                Object.keys(configs_1).forEach(function (key) {
                    _this.connectors[key] = {
                        config: configs_1[key],
                        usedPools: [],
                        unUsedPools: [_this.addConnector(configs_1[key])],
                    };
                });
                console.log('连接建立成功');
            }
            catch (err) {
                throw new Error(err);
            }
        };
        /**
         * 新增连接
         * @param config
         * @returns
         */
        this.addConnector = function (config) {
            switch (config.dbType) {
                case models_1.dbType.mysql:
                    {
                        var connection = mysql.createConnection(__assign({}, config));
                        connection.connect();
                        connection.id = _this.getConnectCount();
                        return connection;
                    }
                    ;
                default: null;
            }
        };
        this.init(configPath);
    }
    return ConnectionPool;
}());
exports.default = ConnectionPool;
