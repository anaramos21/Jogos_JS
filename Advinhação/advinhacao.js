const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificar() {
  const palpite = parseInt(document.getElementById('palpite').value);
  const mensagem = document.getElementById('mensagem');
  tentativas++;

  if (palpite === numeroSecreto) {
    mensagem.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativas.`;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = '🔼 O número é maior!';
  } else if (palpite > numeroSecreto) {
    mensagem.textContent = '🔽 O número é menor!';
  }
}
