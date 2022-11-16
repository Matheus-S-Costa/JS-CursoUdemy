//               0       1          2
const alunos = ['Luiz', 'Matheus', 'Maria'];

alunos.unshift('Luiza');
alunos.push('Fabio')

console.log(alunos.slice(0, -2))
console.log(typeof alunos)
console.log(alunos instanceof Array)

//shift e pop removem elementos, pop do final e shift do comeco;

/* alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
console.log(alunos)
console.log(alunos.length) */


// console.log(alunos[0]);
// console.log(alunos[1]);
// console.log(alunos[2]);