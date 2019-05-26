const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome:', (nome) => {
  // TODO: Log the answer in a database
  console.log(nome + ',SEJA BEM VINDO!');

  rl.close();
});

