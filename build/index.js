"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
const sorter = new Sorter_1.Sorter(new NumbersCollection_1.NumbersCollection([-10, 0, 7, 9, -1, 2]));
sorter.sort();
console.log(sorter.collections);
