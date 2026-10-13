// ==========================================================================
// APLICACIÓN: ELIGE TU DESTINO
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const btnRed = document.getElementById('btn-red');
  const btnBlue = document.getElementById('btn-blue');
  const resultBox = document.getElementById('result-box');
  const resultIcon = document.getElementById('result-icon');
  const resultText = document.getElementById('result-text');
  const resultDescription = document.getElementById('result-description');
  const btnReset = document.getElementById('btn-reset');
  const scoreWins = document.getElementById('score-wins');
  const scoreLosses = document.getElementById('score-losses');

  // Estado del juego
  let wins = 0;
  let losses = 0;

  /**
   * Determina aleatoriamente el resultado y actualiza la interfaz
   * @param {string} colorElegido - 'rojo' o 'azul'
   */
  function jugarDestino(colorElegido) {
    // 50% de probabilidad para ganar o perder
    const esGanador = Math.random() < 0.5;

    // Deshabilitar botones durante el resultado
    btnRed.disabled = true;
    btnBlue.disabled = true;

    // Configurar clases visuales del resultado
    resultBox.classList.remove('hidden', 'win', 'lose');

    if (esGanador) {
      wins++;
      resultBox.classList.add('win');
      resultIcon.textContent = '🎉';
      resultText.textContent = '¡Has ganado!';
      resultDescription.textContent = `¡El botón ${colorElegido} te ha traído fortuna!`;
    } else {
      losses++;
      resultBox.classList.add('lose');
      resultIcon.textContent = '💥';
      resultText.textContent = 'Has perdido';
      resultDescription.textContent = `La suerte no estuvo del lado del botón ${colorElegido}.`;
    }

    // Actualizar marcadores
    scoreWins.textContent = wins;
    scoreLosses.textContent = losses;

    // Mostrar el botón de volver a jugar
    btnReset.classList.remove('hidden');
  }

  /**
   * Reinicia la interfaz para una nueva partida
   */
  function reiniciarJuego() {
    // Ocultar caja de resultados y botón de reinicio
    resultBox.classList.add('hidden');
    resultBox.classList.remove('win', 'lose');
    btnReset.classList.add('hidden');

    // Habilitar los botones de selección
    btnRed.disabled = false;
    btnBlue.disabled = false;

    // Foco en el primer botón para accesibilidad
    btnRed.focus();
  }

  // Event Listeners
  btnRed.addEventListener('click', () => jugarDestino('rojo'));
  btnBlue.addEventListener('click', () => jugarDestino('azul'));
  btnReset.addEventListener('click', reiniciarJuego);
});
