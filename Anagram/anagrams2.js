function anagrams(stringA, stringB){
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
  str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
