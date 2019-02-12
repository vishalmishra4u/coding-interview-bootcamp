function palindrome(str){
  var isPalindrome = true;

  for(var i = 0; i<str.length/2;i++){
    if(str[i] != str[str.length-1-i]){
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

module.exports = palindrome;
