function findBiggestFraction(a, b){
  var result;
  a > b ? result = ["firstFraction", a] : result = ["secondFraction", b];
  return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);
console.log(fractionResult);

console.log("first fraction result: ", firstFraction)
console.log("second fraction result: ", secondFraction)
console.log(findBiggestFraction(firstFraction, secondFraction));
findBiggestFraction(7/16, 13/25);
findBiggestFraction(1/2,3/4);
