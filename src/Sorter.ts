export interface Sortable {
  compare(leftIndx: number, rightIndx: number): boolean;
  swap(leftIndx: number): void;
  length: number;
}
export class Sorter {
  collections: Sortable;
  constructor(collections: Sortable) {
    this.collections = collections;
  }
  sort(): void {
    const { length } = this.collections;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collections.compare(j, j + 1)) {
          this.collections.swap(j);
        }
      }
    }
  }
}
