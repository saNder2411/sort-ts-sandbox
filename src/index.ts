import { Sorter } from './Sorter';
import { NumberCollection } from './NumbersCollection';


const numberCollection = new NumberCollection([10, 2, -5, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection);