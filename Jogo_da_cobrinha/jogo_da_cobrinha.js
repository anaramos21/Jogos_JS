const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let box = 20;
let cobra = [{ x: 9 * box, y: 9 * box }];
let direcao = '';
let comida = {
  x: Math.floor(Math.random() * 19 + 1) * box,
  y: Math.floor(Math.random() * 19 + 1) * box
};

document.addEventListener("keydown", mover);

function mover(event) {
  const tecla = event.keyCode;
  if (tecla == 37 && direcao != 'direita') direcao = 'esquerda';
  if (tecla == 38 && direcao != 'baixo') direcao = 'cima';
  if (tecla == 39 && direcao != 'esquerda') direcao = 'direita';
  if (tecla == 40 && direcao != 'cima') direcao = 'baixo';
}

function desenhar() {
  ctx.fillStyle = 'lightgreen';
  ctx.fillRect(0, 0, 400, 400);

  for (let i = 0; i < cobra.length; i++) {
    ctx.fillStyle = i === 0 ? 'green' : 'darkgreen';
    ctx.fillRect(cobra[i].x, cobra[i].y, box, box);
  }

  ctx.fillStyle = 'red';
  ctx.fillRect(comida.x, comida.y, box, box);

  let cabeca = { x: cobra[0].x, y: cobra[0].y };

  if (direcao == 'esquerda') cabeca.x -= box;
  if (direcao == 'direita') cabeca.x += box;
  if (direcao == 'cima') cabeca.y -= box;
  if (direcao == 'baixo') cabeca.y += box;

  if (
    cabeca.x < 0 || cabeca.x >= canvas.width ||
    cabeca.y < 0 || cabeca.y >= canvas.height ||
    cobra.some((segmento, i) => i !== 0 && cabeca.x === segmento.x && cabeca.y === segmento.y)
  ) {
    clearInterval(jogo);
    alert('Fim de Jogo!');
  }

  if (cabeca.x === comida.x && cabeca.y === comida.y) {
    comida = {
      x: Math.floor(Math.random() * 19 + 1) * box,
      y: Math.floor(Math.random() * 19 + 1) * box
    };
  } else {
    cobra.pop();
  }

  cobra.unshift(cabeca);
}

let jogo = setInterval(desenhar, 150);
