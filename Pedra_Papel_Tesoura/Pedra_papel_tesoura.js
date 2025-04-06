function jogar(escolhaJogador) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

  let resultado = '';
  if (escolhaJogador === escolhaComputador) {
    resultado = 'Empate!';
  } else if (
    (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
  ) {
    resultado = `Você venceu! O computador escolheu ${escolhaComputador}`;
  } else {
    resultado = `Você perdeu! O computador escolheu ${escolhaComputador}`;
  }

  document.getElementById('resultado').innerText = resultado;
}
