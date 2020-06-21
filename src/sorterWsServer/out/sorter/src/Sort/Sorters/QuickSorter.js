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
class QuickSorter {
    sort(sortable, comparator) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield this.quickSort(sortable, comparator, 0, sortable.size() - 1);
                resolve(sortable);
            }));
        });
    }
    quickSort(sortable, comparator, start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                if ((end - start) <= 1) {
                    resolve(sortable);
                    return;
                }
                const pivot = yield sortable.get(Math.floor(Math.random() * (end - start) + start));
                let left = start;
                let right = end;
                for (let i = start; i <= right; ++i) {
                    switch (comparator.compare(yield sortable.get(i), pivot)) {
                        case Comparison_1.default.RIGHT:
                            yield sortable.switch(i, right);
                            --right;
                            --i;
                            break;
                        case Comparison_1.default.LEFT:
                            yield sortable.switch(i, left);
                            ++left;
                            break;
                    }
                }
                yield this.quickSort(sortable, comparator, start, left - (right === left ? 1 : 0));
                yield this.quickSort(sortable, comparator, right, end);
                resolve(sortable);
            }));
        });
    }
}
exports.default = QuickSorter;
//# sourceMappingURL=QuickSorter.js.map