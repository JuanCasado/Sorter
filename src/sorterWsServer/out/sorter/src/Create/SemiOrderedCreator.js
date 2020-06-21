"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ComparatorType_1 = __importDefault(require("../Compare/ComparatorType"));
const CreatorType_1 = __importDefault(require("./CreatorType"));
const CreatorFactory_1 = __importDefault(require("./CreatorFactory"));
class SemiOrderedCreator {
    create(creatable, comparator = ComparatorType_1.default.MAX) {
        const creatorFactory = new CreatorFactory_1.default();
        const orderedCreator = creatorFactory.createCreator(CreatorType_1.default.ORDERED);
        orderedCreator.create(creatable, comparator);
        const maxJump = creatable.size() / 5;
        for (let current = 0; current < creatable.size(); ++current) {
            const jump = Math.min(creatable.size() - 1, Math.max(0, current + Math.floor(Math.random() * maxJump - maxJump / 2)));
            const atCurrent = creatable.getAt(current);
            const atJump = creatable.getAt(jump);
            creatable.setAt(jump, atCurrent);
            creatable.setAt(current, atJump);
        }
    }
}
exports.default = SemiOrderedCreator;
//# sourceMappingURL=SemiOrderedCreator.js.map