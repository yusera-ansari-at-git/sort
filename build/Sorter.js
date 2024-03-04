"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collections) {
        this.collections = collections;
    }
    sort() {
        const { length } = this.collections;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collections.compare(j, j + 1)) {
                    this.collections.swap(j);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
