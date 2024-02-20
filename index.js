const anoAtual = new Date().getFullYear();
const anoNascimento = 2003;

const idade = anoAtual - anoNascimento;
var template = `Você tem ${idade} anos :D`;
console.log(template);