import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const sorter = new Sorter(new NumbersCollection([-10, 0, 7, 9, -1, 2]));
sorter.sort();
const stringSorter = new Sorter(new CharactersCollection('yusera'));
stringSorter.sort();
console.log(stringSorter.collections);

const linkedList = new LinkedList();
const linkedListData = [21, 89, 243, 90, 0, -1];
for (let i = 0; i < linkedListData.length; i++) {
  linkedList.add(linkedListData[i]);
}

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
