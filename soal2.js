var randchar = 'A%B6&z#43rYU7C-8X' ;

//output angka bisa lebih dari 1 karakter, support angka negatif
//var angka = randchar.match(/[+-/0-9]?\d+/g).map(Number);

//output angka berupa 1 karakter saja, tidak support angka negatif
var angka = randchar.match(/[0-9]/g).map(Number);

//output karakter huruf
var huruf = randchar.match(/[A-Za-z]/g).map(String);

console.log(angka);
console.log(huruf);