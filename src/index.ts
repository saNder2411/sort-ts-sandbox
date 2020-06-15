import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';
import { NumberCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';



// const numberCollection = new NumberCollection([10, 2, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

// const charactersCollection = new CharactersCollection(`huErcFlsAkklGTPovnbxZWQ`);
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();