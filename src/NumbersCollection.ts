import { Sortable } from './Sorter';

export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}
  compare(leftIndx: number, RightIndx: number): boolean {
    return this.data[leftIndx] > this.data[RightIndx];
  }
  swap(leftIndx: number): void {
    let temp = this.data[leftIndx];
    this.data[leftIndx] = this.data[leftIndx + 1];
    this.data[leftIndx + 1] = temp;
  }
  get length(): number {
    return this.data.length;
  }
}
