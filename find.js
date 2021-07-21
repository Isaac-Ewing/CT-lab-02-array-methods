const findArr = (arr, callback) => {
  let j = -1;
  for (const i of arr) {
    j++;
    if(callback(i) === true){
      return(j);
    }
  }
  return -1;
};
    
module.exports = { findArr };
