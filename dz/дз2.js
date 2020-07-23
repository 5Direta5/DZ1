var str = 'hello';
str = str[0].toUpperCase() + str.substr(1);
console.log(str);


var str = 'hello';
str = str.split('');
str[0] = str[0].toUpperCase();
var result = str.join('');
console.log(result);