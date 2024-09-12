// A function that converts an object into an immutable Map

const {fromJS} = require('immutable');

/**
 * Converts a JavaScript object into an immutable Map
 * @param {Object} object - The JavaScript object to convert
 * @returns {Map} - An immutable Map representation of the object
 */

function getImmutableObject(object) {
    return fromJS(object);

module.exports = getImmutableObject;
}

