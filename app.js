const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function realizarCalculo(num1, num2, operador) {
  switch (operador) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Operador no válido';
  }
}

rl.question('Ingrese el primer número: ', (num1) => {
  rl.question('Ingrese el operador (+, -, *, /): ', (operador) => {
    rl.question('Ingrese el segundo número: ', (num2) => {
      const resultado = realizarCalculo(parseFloat(num1), parseFloat(num2), operador);
      console.log(`El resultado es: ${resultado}`);
      rl.close();
    });
  });
});