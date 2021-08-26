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
exports.addMysqlConnector = void 0;
var model_1 = require("./model");
var mysql = require('mysql');
/**
 * 新增连接
 * @param config
 * @returns
 */
var addMysqlConnector = function (name, config) {
    if (config === void 0) { config = model_1.defaultMysqlConfig; }
    try {
        var connection = mysql.createConnection(__assign({}, config));
        connection.connect();
        console.info(name + "\u8FDE\u63A5\u6210\u529F");
        connection.query('SELECT 1 + 1 AS solution', function (error, results) {
            if (error)
                throw error;
            console.log('The solution is: ', results[0].solution);
        });
        return connection;
    }
    catch (e) {
        console.error(name + "\u8FDE\u63A5\u5931\u8D25", e);
        return null;
    }
};
exports.addMysqlConnector = addMysqlConnector;
