function isPairFound(leftBracket, rightBracket, bracketsConfig){
  for (var i = 0; i < bracketsConfig.length; i++){
    var left = bracketsConfig[i][0];
    var right = bracketsConfig[i][1];
    if (leftBracket === left && rightBracket === right) {
      return true;
    }
  }
  return false;
}

module.exports = function check(str, bracketsConfig) {
  var arrayFromString = str.split('');
  if (arrayFromString.length % 2 !== 0){
    return false;
  }
  for (var i = 0; i < arrayFromString.length; i++){
    if (isPairFound(arrayFromString[i], arrayFromString[i+1], bracketsConfig)) {
      arrayFromString.splice(i, 2);
      i = i - 2;
    }
  }

  if (arrayFromString.length === 0 ) {
    return true
  } else {
    return false
  }
}