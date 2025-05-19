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

function permutacaoSimples(n) {
  if (n < 0 || fatorial(n) === undefined) {
    return "Entrada inválida.";
  }
  return fatorial(n)
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
      { value: '1', label: 'Permutação simples' },
      { value: '2', label: 'Permutação' },
      { value: '3', label: 'Combinação' },
      { value: '4', label: 'Sair' },
    ],
  });
  if (escolha === '4') {
    outro('Encerrando o script.');
    return;
  }
  
  const n = parseInt(await text({ message: 'Digite o valor de n:' }));
  const p = parseInt(await text({ message: 'Digite o valor de p:' }));

  outro('[p] não pode ser manhor que [n]')

  if (escolha === '1') {
    const n = parseInt(await text({ message: 'Digite o valor de n:' }));
    console.log(permutacaoSimples(n));
    outro('Encerrando o script.');
    return main();
  } else if (escolha === '2') {
    const n = parseInt(await text({ message: 'Digite o valor de n:' }));
    const p = parseInt(await text({ message: 'Digite o valor de p:' }));
    console.log(permutacao(n, p));
    outro('Encerrando o script.');
    return main();
  } else if (escolha === '3') {
    const n = parseInt(await text({ message: 'Digite o valor de n:' }));
    const p = parseInt(await text({ message: 'Digite o valor de p:' }));
    console.log(combinacao(n, p));
    outro('Encerrando o script.');
    return main();
  }
}

main().catch(console.error);