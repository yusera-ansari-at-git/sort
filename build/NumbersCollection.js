"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    compare(leftIndx, RightIndx) {
        return this.data[leftIndx] > this.data[RightIndx];
    }
    swap(leftIndx) {
        let temp = this.data[leftIndx];
        this.data[leftIndx] = this.data[leftIndx + 1];
        this.data[leftIndx + 1] = temp;
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
