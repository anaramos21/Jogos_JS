# 🌳 Projeto Jardineiro Virtual

Este projeto foi desenvolvido utilizando a biblioteca [p5.js](https://p5js.org/) para criar um jogo interativo e educativo. Nele, o jogador assume o papel de um jardineiro responsável por plantar árvores e controlar a temperatura do ambiente. O objetivo principal é reduzir a temperatura ambiente plantando árvores enquanto o jardineiro se movimenta pela tela usando o teclado.

---

## 🎮 Como Jogar

- **Movimentação:** Use as **setas do teclado** (↑ ↓ ← →) para mover o jardineiro pela tela.  
- **Plantar Árvores:** Pressione a tecla **P** ou **Espaço** para plantar uma árvore no local atual do jardineiro.  
- **Objetivo:** Reduzir a temperatura ambiente plantando árvores. Cada árvore plantada diminui a temperatura em **3°C**.

---

## 📋 Regras

- A temperatura inicial é de **10°C** e **aumenta gradualmente** com o tempo.
- O jogo termina quando:
  - A temperatura atinge **50°C ou mais** (🟥 Derrota).
  - O número de árvores plantadas é **maior que a temperatura atual** (🟩 Vitória).

---

## 🧾 Informações Exibidas na Tela

- 🌡️ **Temperatura:** Mostra a temperatura atual do ambiente.
- 🌲 **Árvores Plantadas:** Indica o total de árvores que já foram plantadas.
- ℹ️ **Instruções:** Exibe os controles e objetivos do jogo.

---

## ✨ Funcionalidades

- **Movimentação do Jardineiro:** Controlado pelas teclas direcionais.
- **Plantio de Árvores:** Teclas `P` ou `Espaço` plantam uma árvore que reduz a temperatura.
- **Mensagens Finais:**
  - Vitória: Quando as árvores superam a temperatura.
  - Derrota: Quando a temperatura atinge ou ultrapassa 50°C.

---

## ⚙️ Como Funciona

1. O jardineiro inicia posicionado na parte inferior da tela.
2. A temperatura aumenta com o passar do tempo.
3. O jogador planta árvores que reduzem a temperatura em 3°C por unidade.
4. O jogo finaliza com uma mensagem de vitória ou derrota, conforme o desempenho.

---

## 📚 Tecnologias Utilizadas

- [p5.js](https://p5js.org/) – Biblioteca JavaScript para criação de artes gráficas e jogos interativos.
- HTML, CSS e JavaScript.

---

## 🚀 Sugestões de Expansão

- Adicionar níveis de dificuldade.
- Incluir diferentes tipos de árvores com impactos variados.
- Integrar sons e animações para maior imersão.

---

## 📄 Licença

Este projeto é de livre utilização para fins educacionais.
