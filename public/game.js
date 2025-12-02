document.getElementById('start-btn').addEventListener('click', openGame);
document.getElementById('roll-btn').addEventListener('click', rollDice);

function openGame() {
  document.getElementById("main-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  document.getElementById("cell-modal").classList.add("hidden");
}

function rollDice() {
  const result = Math.floor(Math.random() * 64) + 1; // числа 1–64
  document.getElementById('dice-result').textContent = Выпало: ${result};
  showCell(result);
}

function showCell(number) {
  const title = Клетка ${number};
  const text = Это духовное послание для клетки ${number}.; // сюда вставляй свои описания

  document.getElementById('cell-title').textContent = title;
  document.getElementById('cell-text').textContent = text;

  document.getElementById('cell-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('cell-modal').classList.add('hidden');
}
