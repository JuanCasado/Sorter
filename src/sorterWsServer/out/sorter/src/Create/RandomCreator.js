"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomCreator {
    create(creatable) {
        const values = [];
        for (let i = 0; i < creatable.size(); ++i) {
            values.push(i);
        }
        for (let i = 0; i < creatable.size(); ++i) {
            const index = Math.floor(Math.random() * values.length);
            creatable.setAt(i, values[index]);
            values.splice(index, 1);
        }
    }
}
exports.default = RandomCreator;
//# sourceMappingURL=RandomCreator.js.map