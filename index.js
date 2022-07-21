function range(start,end){
    var rangeOfNums = [];
    for (let x = start; x <= end; x++){
      rangeOfNums.push(x);
    }
    return rangeOfNums;
}

function missingNos(array, k) {
  // var randomNum = Math.floor(Math.random() * array.length );
  // console.log(randomNum);
  var smallestArrayValue = array[0];
  var largestArrayValue = array[array.length - 1];
  var numsToCompare = range(smallestArrayValue, largestArrayValue);
  var missingNums = [];

  
  for (let x = smallestArrayValue; x < numsToCompare.length; x++){ 
    if(array.indexOf(x) === -1 ){
      missingNums.push(x);
    }
  }
  return missingNums;
}



const testArray = [1, 2, 4, 5, 6, 7, 8, 10];
console.log(missingNos(testArray, 2));

// Leave this so we can test your code:
module.exports = missingNos;
