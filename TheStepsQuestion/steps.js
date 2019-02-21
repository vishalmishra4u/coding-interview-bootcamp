function steps(n){
  for(let row = 0; row < n; row++){
    let stair = '';
    for(let column = 0; column <= row; column++){
      if(column <= row){
        stair += '#';
      }else{
        stair += " ";
      }
    }
    console.log(stair);
  }
}

module.exports = steps;
