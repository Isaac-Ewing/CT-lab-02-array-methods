const arrEvery = (arr, callback) => {
  let z = 0;
  for (const i of arr) {
    if(callback(i) === false)
      z = -1;
  }
  if(z === -1)
    return false;
  return true;
};
  
module.exports = { arrEvery };
