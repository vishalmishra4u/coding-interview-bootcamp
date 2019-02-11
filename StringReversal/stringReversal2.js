function reverse(str){
  let reverseString = "";

  for(let char of str){
    reverseString = char + reverseString;
  }

  return reverseString;
}

module.exports = reverse;
