/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol)

Referencia (mutável)- array, object, function
*/


/*
let nome = 'Luiz';
nome = 'Matheus';
let nome2 = nome // copia
console.log(nome2);
nome = 'Outra coisa' // nao altera o nome 2, é imutavel
console.log(nome2);
*/

/*
let a = [1,2,3];
let b = a; // aponta para o mesmo lugar da memoria
// let b = [...a] // -> copia independente de a
console.log(a,b);

a.push(4); // apontam para o mesmo valor na memoria (a e b)
console.log(a,b);

b.pop(); 
console.log(a,b);
*/

const a = {
    nome: 'Matheus',
    sobrenome: 'Silva'
};
const b =  {...a} // copia independente de b
a.nome = 'João';
console.log(b)