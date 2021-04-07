const _ = {};

_.each = (array, iteratee) => {
  for (let i = 0; i < array.length; i++) {
    iteratee(array[i], i, array);
  }
};

_.map = (array, iteratee) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(iteratee(array[i], i, array));
  }
  return output;
};

_.filter = (array, predicate) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array) == true) {
      output.push(array[i]);
    }
  }
  return output;
};

_.find = (array, predicate) => {
  return _.filter(array, predicate)[0];
};

_.random = (min, max) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

_.range = (start, stop, step) => {
  let output = [];
  step = step || 1;
  for (let i = start; i < stop; i += step) {
    output.push(Number([i]));
  }
  return output;
};

export default _;
