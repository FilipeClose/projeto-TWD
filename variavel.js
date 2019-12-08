console.log('string simples');

console.log("string composta");

console.log(typeof `string template`);

console.log(typeof 18);

console.log(typeof 10.5);

console.log(typeof true);

console.log(typeof false);

console.log([18, 50, 45]);

console.log(typeof ['idade1', 'idade2', 'idade3']);

console.log([18, 'maria', true])

var objeto = {
    nome: "filipe",
    idade: 18,
    profissao: 'ti'
}

console.log(objeto);

console.log(objeto.idade);

function exemplo() {
    console.log('exemplo executado')
}

exemplo();

exemplo2 = () => {
    console.log('exemplo')
}

exemplo2();

exemplo3 = () => console.log('exemplo');

exemplo3();

function soma(a, b) {
    var resultado = a + b;
    console.log(resultado)
}

soma(10, 20);

function media(nota1, nota2, nota3, nota4) {
    var somaN = nota1 + nota2 + nota3 + nota4;
    var resultado = somaN / 4;
    console.log(resultado)

}

media(10, 5, 7, 8);