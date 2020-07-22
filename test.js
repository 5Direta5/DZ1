var arr = [1, -1, 2, -2, 3];

var newArr = arr.filter(function(elem) {
  return elem < 0;
});

console.log(newArr);