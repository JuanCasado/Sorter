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
class InsertionSorter {
    sort(sortable, comparator) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let current = 0;
                while (current < sortable.size()) {
                    if (current === 0)
                        ++current;
                    if (comparator.compare(yield sortable.get(current), yield sortable.get(current - 1)) === Comparison_1.default.RIGHT)
                        ++current;
                    else {
                        sortable.switch(current, current - 1);
                        --current;
                    }
                }
                resolve(sortable);
            }));
        });
    }
}
exports.default = InsertionSorter;
//# sourceMappingURL=GnomeSorter.js.map