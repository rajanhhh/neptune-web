function isString(value) {
  return typeof value === 'string';
}
function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}
function isNumeric(value) {
  return /^\d+$/.test(value);
}
function isInteger(value) {
  return isNumber(value) && Math.floor(value) === value;
}
function isBoolean(value) {
  return typeof value === 'boolean';
}
function isObject(value) {
  return !isNull(value) && !isUndefined(value) && value.constructor === Object;
}
function isArray(value) {
  return Array.isArray(value);
}
function isNull(value) {
  return value === null;
}
function isUndefined(value) {
  return typeof value === 'undefined';
}

function isEvent(value) {
  return (
    !isNull(value) &&
    !isUndefined(value) &&
    !!value.nativeEvent &&
    value.nativeEvent instanceof Event
  );
}

export {
  isString,
  isNumber,
  isNumeric,
  isInteger,
  isBoolean,
  isObject,
  isArray,
  isNull,
  isUndefined,
  isEvent,
};
