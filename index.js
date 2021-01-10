const sum = require("../sum-from-a-to-b-test-js");

function sumItems(array) {
  // Sum all the numbers in the array
  let accumulator = 0;
  array.forEach((value)=> {
    if(Array.isArray(value)){
      accumulator += sumItems(value)
    }else{
      accumulator += value
    }
    
  })

  return accumulator
}

module.exports = sumItems;