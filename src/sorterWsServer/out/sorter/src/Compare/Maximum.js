"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comparison_1 = __importDefault(require("./Comparison"));
const ComparatorType_1 = __importDefault(require("./ComparatorType"));
class Maximum {
    compare(comparable1, comparable2) {
        if (comparable1.getValue() > comparable2.getValue()) {
            return Comparison_1.default.LEFT;
        }
        else if (comparable1.getValue() < comparable2.getValue()) {
            return Comparison_1.default.RIGHT;
        }
        else {
            return Comparison_1.default.SAME;
        }
    }
    type() {
        return ComparatorType_1.default.MAX;
    }
}
exports.default = Maximum;
//# sourceMappingURL=Maximum.js.map