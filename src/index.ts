import { Sorter } from './Sorter';
import { NumberCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const charactersCollection = new CharactersCollection(`huErcFlsAkklGTPovnbxZWQ`);
const numberCollection = new NumberCollection([10, 2, -5, 0]);
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);