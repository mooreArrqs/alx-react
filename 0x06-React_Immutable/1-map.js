// A function that converts an object into an Immutable Map

// Import the Map method from Immutable.js
import { Map } from 'immutable';

/**
 * Converts a JavaScript object into an immutable Map.
 * @param {Object} object: The JavaScript object to convert.
 * @returns {Map}: An immutable Map representation of the object.
 */

function getImmutableObject(object) {
  return Map(object);
}

// An example:

const obj = {
    fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

// Log the Immutable Map result
console.log(getImmutableObject(obj));

// Export the function
export default getImmutableObject;

