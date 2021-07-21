const filterArr = (arr, callback) => {
  const newArr = [];
  let j = -1;
  for (const i of arr) {
    if(callback(i) === true){
      j++;
      newArr[j] = (i);
    }
  }
  return newArr;
};
  
module.exports = { filterArr };
