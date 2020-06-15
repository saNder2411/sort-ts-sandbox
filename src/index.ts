import { LinkedList } from './LinkedList';
import { NumberCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';



const numberCollection = new NumberCollection([10, 2, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection(`huErcFlsAkklGTPovnbxZWQ`);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);


linkedList.sort();
linkedList.print();