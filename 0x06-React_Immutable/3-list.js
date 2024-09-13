// Importing from Immutable.js
import { List } from 'immutable';

// This function will convert an array into an Immutable List
export function getListObject(array) {
  return List(array);
}

// This function will accept two arguments starting with a List
export function addElementToList(list, element) {
  return list.push(element);
}

