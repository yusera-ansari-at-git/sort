import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const sorter = new Sorter(new NumbersCollection([-10, 0, 7, 9, -1, 2]));
sorter.sort();
const stringSorter = new Sorter(new CharactersCollection('yusera'));
stringSorter.sort();
console.log(stringSorter.collections);
