confirm(
  `Apostas são arriscadas e pode te dar prejuízos financeiros, deseja continuar? Para continuar press "ok"`
);

const coins = 50;
let coinsWin = coins;

document.getElementById("send-button").addEventListener("click", (e) => {
  e.preventDefault();
  if (coinsWin <= 0) {
    alert("Você ficou sem moedas! O jogo acabou.");
    return;
  } else if (coinsWin === 100) {
    alert(`Você atingiu a pontuação máxima de 100 moedas, o jogo acabou! `);
    return;
  } else if (coinsWin >= 101) {
    alert(
      `Você atingiu a pontuação máxima de ${coinsWin} moedas, o jogo acabou! `
    );
    return;
  }

  const numeroAposta = Number(document.getElementById("numeroAposta").value);

  const valorAposta = Number(document.getElementById("valorAposta").value);
  if (numeroAposta < 1 || numeroAposta > 6 || isNaN(numeroAposta)) {
    alert("Insira um número válido de 1 a 6.");
    return;
  } else if (valorAposta < 1 || valorAposta > coinsWin || isNaN(valorAposta)) {
    alert("Insira um valor válido para sua aposta");
    return;
  }

  const sorteando = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  const sorteio = sorteando();

  console.log(`Sorteado: ${sorteio}, Número da aposta: ${numeroAposta}`);

  if (sorteio === numeroAposta) {
    coinsWin += valorAposta * 2;
    alert(`Você ganhou ${valorAposta} moedas, Deseja continuar apostando?`);
  } else if (sorteio !== numeroAposta) {
    coinsWin -= valorAposta;
    alert(`Você perdeu ${valorAposta} moedas, Deseja continuar apostando?`);
  }
  console.log(coinsWin);

  document.getElementById("valorMoeda").textContent = coinsWin;

  if (coinsWin <= 0) {
    alert(
      `Game Over, você perdeu todas as moedas e seu saldo atual é ${coinsWin} moedas.`
    );
  } else if (coinsWin === 100) {
    alert(`Você atingiu pontução máxima de ${coinsWin} moedas, o jogo acabou!`);
  } else if (coinsWin >= 101) {
    alert(`Você ultrapassou a pontuação máxima de 100 moedas, o jogo acabou! `);
  }
});
