"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbType = void 0;
/**
 * 数据库类型枚举
*/
var dbType;
(function (dbType) {
    dbType[dbType["mysql"] = 0] = "mysql";
    dbType[dbType["redis"] = 1] = "redis";
    dbType[dbType["oracle"] = 2] = "oracle";
    dbType[dbType["sqlserver"] = 3] = "sqlserver";
})(dbType = exports.dbType || (exports.dbType = {}));
;
;
;
;
