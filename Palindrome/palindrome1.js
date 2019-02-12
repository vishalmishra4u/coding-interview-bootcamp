function palindrome(str){
  var reverse = str.split('').reverse().join('');
  if(reverse === str){
    return true;
  }

  return false;
}

module.exports = palindrome;
