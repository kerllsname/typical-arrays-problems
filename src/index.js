
exports.min = function min (array) {
  let min = 0;
  if(array === undefined || array.length === 0) return 0;
  for(let i = 0; i <= array.length; i++){
    if (array[i] < min) min = array[i];
  }
  return min;
}

exports.max = function max (array) {
  let max = 0;
  if(array === undefined || array.length === 0) return 0;
  array.forEach(function(el){
    if (el > max) max = el; 
  })
  return max;
}

exports.avg = function avg (array) {
  let temp = 0;
  if(array === undefined || array.length === 0) return 0;
  for(let i = 0; i <= array.length - 1; i++){
    temp += array[i];
    console.log(temp)
  }
  let avg = temp / (array.length);
  return avg;
}
