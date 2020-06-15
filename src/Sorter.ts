import { NumberCollection } from './NumbersCollection';


export class Sorter {

  constructor(public collection: NumberCollection) {}

  sort(): void {
    const {length} = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        if (this.collection.compare(j, j +1 )) {
          this.collection.swap(j, j + 1);
        }

      }
    }
  }

}
const numberCollection = new NumberCollection([10, 2, -5, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection);