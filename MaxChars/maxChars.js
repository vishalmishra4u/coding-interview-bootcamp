function maxChars(str){
  const chars = {};

  for(let char of str){
    if(!chars[char]){
      chars[char] = 1;
    }else{
      chars[char]++;
    }
  }
}

module.exports = maxChars;
