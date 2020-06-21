"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatorType_1 = __importDefault(require("./CreatorType"));
const OrderedCreator_1 = __importDefault(require("./OrderedCreator"));
const SemiOrderedCreator_1 = __importDefault(require("./SemiOrderedCreator"));
const RandomCreator_1 = __importDefault(require("./RandomCreator"));
class CreatorFactory {
    createCreator(creator) {
        switch (creator) {
            case CreatorType_1.default.ORDERED: return new OrderedCreator_1.default();
            case CreatorType_1.default.SEMI_ORDERED: return new SemiOrderedCreator_1.default();
            case CreatorType_1.default.RANDOM: return new RandomCreator_1.default();
        }
    }
}
exports.default = CreatorFactory;
//# sourceMappingURL=CreatorFactory.js.map