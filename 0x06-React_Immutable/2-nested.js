// Importing js library for immutable objects
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  // Convert an object into an immutable Map
  const immutableObj = fromJS(object);

  return immutableObj.getIn(array);
}

// An example:

const obj = {
  name: {
    first: "Guillaume",
    last: "Salva"
  }
};

console.log(accessImmutableObject(obj, ['name', 'first']));
console.log(accessImmutableObject(obj, ['name', 'middle']));

