var arr = [];
var str = "x";
for (var i = 0; i < 10; i++) {
    arr.push(str);
    str += "x";
}
console.log(arr);