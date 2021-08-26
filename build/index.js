"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connectPool_1 = __importDefault(require("./connectPool"));
var MingDBC = /** @class */ (function () {
    function MingDBC(configPath) {
        this.connectPool = new connectPool_1.default(configPath);
    }
    return MingDBC;
}());
;
exports.default = MingDBC;
