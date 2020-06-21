"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ElementHolderFactory_1 = __importDefault(require("../../sorter/src/Hold/ElementHolderFactory"));
const ElementHolderType_1 = __importDefault(require("../../sorter/src/Hold/ElementHolderType"));
const CreatorType_1 = __importDefault(require("../../sorter/src/Create/CreatorType"));
const CreatorFactory_1 = __importDefault(require("../../sorter/src/Create/CreatorFactory"));
const ComparatorType_1 = __importDefault(require("../../sorter/src/Compare/ComparatorType"));
const ComparatorFactory_1 = __importDefault(require("../../sorter/src/Compare/ComparatorFactory"));
const SortFactoryType_1 = __importDefault(require("../../sorter/src/Sort/SortFactoryType"));
const SortType_1 = __importDefault(require("../../sorter/src/Sort/SortType"));
const SortAbstractFactory_1 = __importDefault(require("../../sorter/src/Sort/SortAbstractFactory"));
const size = 1000;
const elementFactory = new ElementHolderFactory_1.default();
const elements = elementFactory.createElementHolder(ElementHolderType_1.default.REAL_TIME, size);
const creatorFactory = new CreatorFactory_1.default();
const creator = creatorFactory.createCreator(CreatorType_1.default.RANDOM);
creator.create(elements, ComparatorType_1.default.MIN);
const sortAbstractFactory = new SortAbstractFactory_1.default();
const sortFactory = sortAbstractFactory.createFactory(SortFactoryType_1.default.LOCAL);
const sorter = sortFactory.createSorter(SortType_1.default.SHELL);
const comparatorFactory = new ComparatorFactory_1.default();
const comparator = comparatorFactory.createComparator(ComparatorType_1.default.MIN);
sorter.sort(elements, comparator).then(() => {
    console.log('Hello');
});
//# sourceMappingURL=main.js.map