import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const sorter = new Sorter(new NumbersCollection([-10, 0, 7, 9, -1, 2]));
sorter.sort();
console.log(sorter.collections);
