// [] -> array, {} -> objeto
// argumento valor passado pelo parâmetro

/*
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Matheus', 'Silva', 20);
const pessoa2 = criaPessoa('Ana', 'Cecilia', 06);
console.log(pessoa1.nome);
console.log(pessoa2)
*/

const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Costa',
    idade: 20,

    fala() {
        console.log(`${this.idade} é a minha idade atual...`)
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
