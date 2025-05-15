import { outro, select, text } from '@clack/prompts';

// Numeros inteiros positivos de 1 a n
function fatorial(n) {
  if (n < 0) {
    return undefined;
  }
  if (n === 0) {
    return 1;
  }
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// Possibilidades sem repetir
function permutacao(n, p) {
  if (n < 0 || p < 0 || p > n || fatorial(n) === undefined || fatorial(n - p) === undefined) {
    return "Entrada inválida.";
  }
  return fatorial(n) / fatorial(n - p);
}

// Possibilidades com repetição
function combinacao(n, p) {
  if (n < 0 || p < 0 || p > n || fatorial(n) === undefined || fatorial(p) === undefined || fatorial(n - p) === undefined) {
    return "Entrada invalida.";
  }
  return fatorial(n) / (fatorial(p) * fatorial(n - p));
}

async function main() {
  const escolha = await select({
    message: 'Escolha a operação:',
    options: [
      { value: '1', label: 'Permutação' },
      { value: '2', label: 'Combinação' },
      { value: '3', label: 'Sair' },
    ],
  });
  if (escolha === '3') {
    outro('Encerrando o script.' );
    return;
  }
  
  outro('[n] não pode ser menor q [p]')
  const n = parseInt(await text({ message: 'Digite o valor de n:' }));
  const p = parseInt(await text({ message: 'Digite o valor de p:' }));

  if (escolha === '1') {
    console.log(permutacao(n, p));
    outro('Encerrando o script.' );
    return;
  } else if (escolha === '2') {
    console.log(combinacao(n, p));
    outro('Encerrando o script.' );
    return;
  }
}

main().catch(console.error);