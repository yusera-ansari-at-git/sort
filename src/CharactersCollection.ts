import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}
  get length(): number {
    return this.data.length;
  }
  compare(leftIndx: number, rightIndx: number): boolean {
    return (
      this.data[leftIndx].toUpperCase() > this.data[rightIndx].toUpperCase()
    );
  }

  swap(leftIndx: number): void {
    let characters = this.data.split('');
    let temp = characters[leftIndx];
    characters[leftIndx] = characters[leftIndx + 1];
    characters[leftIndx + 1] = temp;
    this.data = characters.join('');
  }
}
