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
class TimSorter {
    constructor() {
        this.bucketSize = 32;
    }
    sort(sortable, comparator) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield this.timSort(sortable, comparator, 0, sortable.size() - 1);
                resolve(sortable);
            }));
        });
    }
    timSort(sortable, comparator, start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const size = end - start;
                if (size <= this.bucketSize) {
                    for (let i = start; i <= end; ++i) {
                        for (let j = start; j <= end; ++j) {
                            if (comparator.compare(yield sortable.get(i), yield sortable.get(j)) === Comparison_1.default.LEFT) {
                                yield sortable.switch(i, j);
                            }
                        }
                    }
                    resolve(sortable);
                    return;
                }
                let half = Math.floor(size / 2) + start;
                yield this.timSort(sortable, comparator, start, half - 1);
                yield this.timSort(sortable, comparator, half, end);
                let [i, left, right] = [start, start, half];
                while (left < half && right <= end) {
                    if (comparator.compare(yield sortable.get(left), yield sortable.get(right)) === Comparison_1.default.RIGHT) {
                        for (let j = right - 1; j >= left; --j) {
                            yield sortable.switch(j, j + 1);
                        }
                        ++right;
                        ++left;
                        ++half;
                    }
                    else {
                        ++left;
                    }
                    ++i;
                }
                while (right <= end) {
                    yield sortable.switch(i, right);
                    ++right;
                    ++i;
                }
                while (left < half) {
                    yield sortable.switch(i, left);
                    ++left;
                    ++i;
                }
                resolve(sortable);
            }));
        });
    }
}
exports.default = TimSorter;
//# sourceMappingURL=TimSorter.js.map