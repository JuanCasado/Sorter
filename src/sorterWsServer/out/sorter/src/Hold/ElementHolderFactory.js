"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ElementHolderType_1 = __importDefault(require("./ElementHolderType"));
const DelayedElementHolder_1 = __importDefault(require("./DelayedElementHolder"));
const ElementHolder_1 = __importDefault(require("./ElementHolder"));
class ElementHolderFactory {
    createElementHolder(elementHolder, size) {
        switch (elementHolder) {
            case ElementHolderType_1.default.DELAYED: return new DelayedElementHolder_1.default(size);
            case ElementHolderType_1.default.REAL_TIME: return new ElementHolder_1.default(size);
        }
    }
}
exports.default = ElementHolderFactory;
//# sourceMappingURL=ElementHolderFactory.js.map