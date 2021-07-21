const reduceArr = (arr, callback, initialValue) => {
  let j = 0;
  let accumulator = 0;
  if(!initialValue) {
    j = 1;
    accumulator = callback(arr[j - 1], arr[j]);
    j++;
  }
  else {
    accumulator = callback(initialValue, arr[j]);
    j++;
  }
  while(j < arr.length) {
    while(!arr[j])
      j++;
    accumulator = callback(accumulator, arr[j]);
    j++;
  }
  return accumulator;
};

module.exports = { reduceArr };
