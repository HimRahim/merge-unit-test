import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private mergeSort(left: number[], right: number[]): number[] {
    const resultArray: number[] = [];
    let leftIndex = 0,
      rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }

  private sortArray(array: number[]): number[] {
    if (array.length <= 1) return array;
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return this.mergeSort(this.sortArray(left), this.sortArray(right));
  }

  merge(
    collection1: number[],
    collection2: number[],
    collection3: number[],
  ): number[] {
    const mergeArray = collection1.concat(collection2, collection3);
    return this.sortArray(mergeArray);
  }
}
