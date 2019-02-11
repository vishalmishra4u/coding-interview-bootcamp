function reverse(str){
  const arr = str.split('');
  arr.reverse();
  return arr.join('');

  //or return str.split('').reverse().join('');
}

module.exports = reverse;
