"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __importDefault(require("../Compare/Element"));
class ElementHolder {
    constructor(size) {
        this.data = [];
        this.length = size;
        this.data.length = this.length;
    }
    getAt(position) {
        return this.data[position].getValue();
    }
    setAt(position, value) {
        this.data[position] = new Element_1.default(value);
    }
    size() {
        return this.length;
    }
    forEach(callback) {
        for (let i = 0; i < this.size(); ++i) {
            callback(this.getAt(i), i);
        }
    }
    get(position) {
        return new Promise((resolve) => resolve(this.data[position]));
    }
    switch(position1, position2) {
        const at1 = this.getAt(position1);
        const at2 = this.getAt(position2);
        this.setAt(position1, at2);
        this.setAt(position2, at1);
        return new Promise((resolve) => resolve());
    }
}
exports.default = ElementHolder;
//# sourceMappingURL=ElementHolder.js.map