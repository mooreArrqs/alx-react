import { List, Map } from 'immutable';

// This function takes two arguments and return them as an Immutable List
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// An example:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(concatElements(arr1, arr2));

// This function merge two objects and return their values as an Immutable List
export function mergeElements(page1, page2) {
  const mergedMap = Map(page1).merge(Map(page2)); // Convert and merge Immutable oblects
  return List(mergedMap.valueSeq());
}

