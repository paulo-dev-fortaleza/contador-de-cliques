// Inicializa contador com valor salvo ou zero
let count = parseInt(localStorage.getItem("contador")) || 0;

// Seleção de elementos
const countElement = document.getElementById("count");
const btnIncrement = document.getElementById("increment");
const btnDecrement = document.getElementById("subtrai");
const btnReset = document.getElementById("resetBtn");
const btnSoma = document.getElementById("soma"); // Botão extra, se usado

// Atualiza o display e salva no localStorage
function updateDisplay() {
  countElement.textContent = count;
  localStorage.setItem("contador", count);
}

// Animação rápida visual (opcional)
function animarContador() {
  countElement.classList.add("clicado");
  setTimeout(() => countElement.classList.remove("clicado"), 150);
}

// Eventos
if (btnIncrement) {
  btnIncrement.addEventListener("click", () => {
    count++;
    updateDisplay();
    animarContador();
  });
}

if (btnSoma) {
  btnSoma.addEventListener("click", () => {
    count++;
    updateDisplay();
    animarContador();
  });
}

if (btnDecrement) {
  btnDecrement.addEventListener("click", () => {
    count--;
    updateDisplay();
    animarContador();
  });
}

if (btnReset) {
  btnReset.addEventListener("click", () => {
    count = 0;
    updateDisplay();
    animarContador();
  });
}

// Inicializa a contagem no carregamento
updateDisplay();