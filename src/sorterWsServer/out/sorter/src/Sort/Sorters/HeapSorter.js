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
function print(sortable) {
    return __awaiter(this, void 0, void 0, function* () {
        let acc = '';
        for (let i = 0; i < sortable.size(); ++i) {
            acc += (yield (yield sortable.get(i)).getValue()) + ',';
        }
        console.log(acc);
    });
}
class HeapSorter {
    sort(sortable, comparator) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                for (let i = sortable.size() / 2 - 1; i >= 0; --i) {
                    yield this.makeHeap(sortable, comparator, i, sortable.size());
                }
                yield print(sortable);
                for (let i = sortable.size() - 1; i > 0; --i) {
                    yield sortable.switch(0, i);
                    yield this.makeHeap(sortable, comparator, 0, i);
                }
                resolve(sortable);
            }));
        });
    }
    makeHeap(sortable, comparator, root, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let largest = root;
            let left = 2 * root + 1;
            let right = 2 * root + 2;
            if ((left < size) && (comparator.compare(yield sortable.get(left), yield sortable.get(largest)) === Comparison_1.default.RIGHT))
                largest = left;
            if ((right < size) && (comparator.compare(yield sortable.get(right), yield sortable.get(largest)) === Comparison_1.default.RIGHT))
                largest = right;
            if (largest !== root) {
                yield sortable.switch(root, largest);
                yield this.makeHeap(sortable, comparator, largest, size);
            }
        });
    }
}
exports.default = HeapSorter;
//# sourceMappingURL=HeapSorter.js.map