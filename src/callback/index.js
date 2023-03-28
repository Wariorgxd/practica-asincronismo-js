"use strict";

function sumar(a, b) {
  return a + b;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(3, 5, sumar));

console.log("----------------");

setTimeout(function (params) {
  console.log("Hola Javascript");
}, 5000);

function saludo(nombre) {
  console.log(`Hola ${nombre}`);
}

setTimeout(saludo, 3000, "Sebastian");
