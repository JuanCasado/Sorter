"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ComparatorType_1 = __importDefault(require("../Compare/ComparatorType"));
class OrderedCreator {
    create(creatable, comparator = ComparatorType_1.default.MAX) {
        switch (comparator) {
            case ComparatorType_1.default.MAX: return this.createMaximum(creatable);
            case ComparatorType_1.default.MIN: return this.createMinimum(creatable);
        }
    }
    createMaximum(creatable) {
        for (let i = 0; i < creatable.size(); ++i) {
            creatable.setAt(i, (creatable.size() - 1) - i);
        }
    }
    createMinimum(creatable) {
        for (let i = 0; i < creatable.size(); ++i) {
            creatable.setAt(i, i);
        }
    }
}
exports.default = OrderedCreator;
//# sourceMappingURL=OrderedCreator.js.map