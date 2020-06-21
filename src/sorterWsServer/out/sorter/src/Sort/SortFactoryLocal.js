"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SortType_1 = __importDefault(require("./SortType"));
const BubbleSorter_1 = __importDefault(require("./Sorters/BubbleSorter"));
const CocktailSorter_1 = __importDefault(require("./Sorters/CocktailSorter"));
const GnomeSorter_1 = __importDefault(require("./Sorters/GnomeSorter"));
const HeapSorter_1 = __importDefault(require("./Sorters/HeapSorter"));
const InsertionSorter_1 = __importDefault(require("./Sorters/InsertionSorter"));
const MergeSorter_1 = __importDefault(require("./Sorters/MergeSorter"));
const QuickSorter_1 = __importDefault(require("./Sorters/QuickSorter"));
const SelectionSorter_1 = __importDefault(require("./Sorters/SelectionSorter"));
const ShellSorter_1 = __importDefault(require("./Sorters/ShellSorter"));
const TimSorter_1 = __importDefault(require("./Sorters/TimSorter"));
class SortFactoryLocal {
    createSorter(sorter) {
        switch (sorter) {
            case SortType_1.default.BUBBLE: return new BubbleSorter_1.default();
            case SortType_1.default.COCKTAIL: return new CocktailSorter_1.default();
            case SortType_1.default.GNOME: return new GnomeSorter_1.default();
            case SortType_1.default.HEAP: return new HeapSorter_1.default();
            case SortType_1.default.INSERT: return new InsertionSorter_1.default();
            case SortType_1.default.MERGE: return new MergeSorter_1.default();
            case SortType_1.default.QUICK: return new QuickSorter_1.default();
            case SortType_1.default.SELECTION: return new SelectionSorter_1.default();
            case SortType_1.default.SHELL: return new ShellSorter_1.default();
            case SortType_1.default.TIM: return new TimSorter_1.default();
        }
    }
}
exports.default = SortFactoryLocal;
//# sourceMappingURL=SortFactoryLocal.js.map