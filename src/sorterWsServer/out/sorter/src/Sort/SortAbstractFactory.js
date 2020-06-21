"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SortFactoryType_1 = __importDefault(require("./SortFactoryType"));
const SortFactoryLocal_1 = __importDefault(require("./SortFactoryLocal"));
const SortFactoryREST_1 = __importDefault(require("./SortFactoryREST"));
const SortFactoryWS_1 = __importDefault(require("./SortFactoryWS"));
class SortAbstractFactory {
    createFactory(factory) {
        switch (factory) {
            case SortFactoryType_1.default.LOCAL: return new SortFactoryLocal_1.default();
            case SortFactoryType_1.default.REST: return new SortFactoryREST_1.default();
            case SortFactoryType_1.default.WS: return new SortFactoryWS_1.default();
        }
    }
}
exports.default = SortAbstractFactory;
//# sourceMappingURL=SortAbstractFactory.js.map