function matrixTranspose(arr){
  var newArray = [];
  for(var i = 0; i < arr.length; i++){
    newArray.push([arr[0][i],arr[1][i],arr[2][i]]);
  }

  return newArray;
}


module.exports = matrixTranspose;
