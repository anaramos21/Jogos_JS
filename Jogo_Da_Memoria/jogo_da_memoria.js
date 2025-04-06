const emojis = ['🍎', '🍌', '🍓', '🍇', '🍎', '🍌', '🍓', '🍇'];
let tabuleiro = document.getElementById('tabuleiro');
let cartas = [];
let viradas = [];

function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function criarTabuleiro() {
  const embaralhadas = embaralhar([...emojis]);
  embaralhadas.forEach((emoji, index) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.dataset.emoji = emoji;
    div.dataset.index = index;
    div.addEventListener('click', virarCarta);
    tabuleiro.appendChild(div);
    cartas.push(div);
  });
}

function virarCarta() {
  if (this.classList.contains('virado') || viradas.length === 2) return;

  this.classList.add('virado');
  this.textContent = this.dataset.emoji;
  viradas.push(this);

  if (viradas.length === 2) {
    const [c1, c2] = viradas;
    if (c1.dataset.emoji !== c2.dataset.emoji) {
      setTimeout(() => {
        c1.classList.remove('virado');
        c2.classList.remove('virado');
        c1.textContent = '';
        c2.textContent = '';
        viradas = [];
      }, 1000);
    } else {
      viradas = [];
    }
  }
}

criarTabuleiro();
