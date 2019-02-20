function capitalise(word){
  var splittedWord = word.split(" ");
  var arr = [];
  splittedWord.forEach(function(word){
  	arr.push(word[0].toUpperCase()+word.slice(1,word.length));
  });


  return arr.join(" ");
}

module.exports = capitalise;
