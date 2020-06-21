"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ComparatorType_1 = __importDefault(require("./ComparatorType"));
const Maximum_1 = __importDefault(require("./Maximum"));
const Minimum_1 = __importDefault(require("./Minimum"));
class ComparatorFactory {
    createComparator(comparator) {
        switch (comparator) {
            case ComparatorType_1.default.MAX: return new Maximum_1.default();
            case ComparatorType_1.default.MIN: return new Minimum_1.default();
        }
    }
    switchComparator(comparator) {
        switch (comparator.type()) {
            case ComparatorType_1.default.MAX: return new Minimum_1.default();
            case ComparatorType_1.default.MIN: return new Maximum_1.default();
        }
    }
}
exports.default = ComparatorFactory;
//# sourceMappingURL=ComparatorFactory.js.map