// A function that converts an object into an immutable Map

const { fromJS } = require('immutable');

/**
 * Converts a JavaScript object into an immutable Map
 * @param {Object} object - The JavaScript object to convert
 * @returns {Map} - An immutable Map representation of the object
 */

function getImmutableObject(object) {
    return fromJS(object);
}

// Example usage:
const obj = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

console.log(getImmutableObject(obj));

