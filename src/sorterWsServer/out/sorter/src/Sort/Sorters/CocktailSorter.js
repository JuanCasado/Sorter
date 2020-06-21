"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comparison_1 = __importDefault(require("../../Compare/Comparison"));
class CocktailSorter {
    sort(sortable, comparator) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let sortedRight = 0;
                let sortedLeft = 0;
                for (let i = 0; i < sortable.size(); ++i) {
                    for (let j = 1; j < sortable.size() - sortedRight; ++j) {
                        if (comparator.compare(yield sortable.get(j - 1), yield sortable.get(j)) === Comparison_1.default.RIGHT) {
                            yield sortable.switch(j - 1, j);
                        }
                    }
                    ++sortedRight;
                    for (let j = sortable.size() - 2; j > sortedLeft; --j) {
                        if (comparator.compare(yield sortable.get(j + 1), yield sortable.get(j)) === Comparison_1.default.LEFT) {
                            yield sortable.switch(j + 1, j);
                        }
                    }
                    ++sortedLeft;
                }
                resolve(sortable);
            }));
        });
    }
}
exports.default = CocktailSorter;
//# sourceMappingURL=CocktailSorter.js.map