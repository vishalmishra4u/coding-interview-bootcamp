function pyramid(n){
  const midpoint = Math.floor((2*n - 1)/2);

  for(let row = 0; row < n; row++){
    for(let column = 0; column < 2 * n - 1;column++){
      let level = '';

      if(midpoint - row <= column && midpoint + row >= column){
        level += '#';
      }else{
        level += ' ';
      }
    }
  }
}

module.exports = pyramid;
