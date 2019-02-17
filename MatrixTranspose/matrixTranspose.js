function matrixTranspose(arr){
  console.log(arr.length);
  var newArray = [];
  for(var i = 0; i< arr.length; i++){
    for(var j = 0;  j < arr.length; j++){
      newArray[i][j] = arr[j][i];
    }
  }

  console.log(newArray);
  return newArray;
}


module.exports = matrixTranspose;
