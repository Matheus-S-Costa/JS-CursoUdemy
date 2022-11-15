// let num1 = 25;
// let num2 = (num1**0.5)
// let num2 = Math.floor(num1);
// let num2 = Math.ceil(num1);
// let num2 = Math.round(num1);
// console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// const aleatorio = Math.round(Math.random() * (10-5) + 5);
// console.log(aleatorio)

// console.log(2**10);

// Exercício

let numero = prompt('Digite um numero:');
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML =  numero;
texto.innerHTML = `<p>Raíz quadrada: ${numero**0.5} <br></p>`
texto.innerHTML += `<p>Número é inteiro: ${Number.isInteger(numero)} <br></p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} <br></p>`
texto.innerHTML += `<p>Arredondando pra baixo: ${Math.floor(numero)} <br></p>`
texto.innerHTML += `<p>Arredondando pra cima: ${Math.ceil(numero)} <br></p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} <br></p>`
