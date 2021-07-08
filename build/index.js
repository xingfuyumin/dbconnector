"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connectionPool_1 = __importDefault(require("./connectionPool"));
var MingDBConnector = /** @class */ (function () {
    function MingDBConnector(configPath) {
        this.connectionPool = new connectionPool_1.default(configPath);
    }
    return MingDBConnector;
}());
;
