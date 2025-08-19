// Inicializa a variável da soma
let soma = 0;

// Loop de 1 até 20
for (let i = 1; i <= 20; i++) {
  // Verifica se o número é ímpar
  if (i % 2 !== 0) {
    soma = soma + i; // adiciona o número à soma
  }
}

// Mostra o resultado final
console.log("A soma dos números ímpares entre 1 e 20 é: " + soma);









// Inicializa variáveis
let soma = 0;
let i = 1;

// Enquanto i for menor ou igual a 20
while (i <= 20) {
  // Verifica se é ímpar
  if (i % 2 !== 0) {
    soma = soma + i; // adiciona à soma
  }
  i++; // incrementa o contador
}

// Mostra o resultado final
console.log("A soma dos números ímpares entre 1 e 20 é: " + soma);
