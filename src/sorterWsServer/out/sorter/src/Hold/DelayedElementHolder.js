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
const ElementHolder_1 = __importDefault(require("./ElementHolder"));
class DelayedElementHolder extends ElementHolder_1.default {
    constructor() {
        super(...arguments);
        this.delay = 1;
    }
    setDelay(delay) {
        this.delay = delay;
    }
    sleep() {
        return new Promise(resolve => setTimeout(resolve, this.delay));
    }
    switch(position1, position2) {
        const _super = Object.create(null, {
            switch: { get: () => super.switch }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.switch.call(this, position1, position2);
            yield this.sleep();
        });
    }
    get(position) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const comparable = _super.get.call(this, position);
            yield this.sleep();
            return comparable;
        });
    }
}
exports.default = DelayedElementHolder;
//# sourceMappingURL=DelayedElementHolder.js.map