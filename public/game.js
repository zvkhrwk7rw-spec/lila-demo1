function openGame() {
  document.getElementById("main-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
}

const board = document.getElementById("board");
let position = 1;
let token;

// генерируем 64 клетки
for (let i = 1; i <= 64; i++) {
  let cell = document.createElement("div");
  cell.className = "cell";
  cell.setAttribute("data-id", i);
  cell.textContent = i;

  if (i === 1) {
    token = document.createElement("div");
    token.className = "token";
    cell.appendChild(token);
  }

  board.appendChild(cell);
}

document.getElementById("roll").onclick = () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  position += dice;
  if (position > 64) position = 64;

  moveToken(position);

  document.getElementById("info").innerHTML =
    Выпало: <b>${dice}</b>;

  // открыть окно клетки
  showCell(position);
};

function moveToken(pos) {
  const cells = document.querySelectorAll(".cell");

  cells.forEach(c => {
    if (c.contains(token)) c.removeChild(token);
  });

  cells[pos - 1].appendChild(token);
}

function showCell(num) {
  document.getElementById("cell-title").innerText = Клетка ${num};
  document.getElementById("cell-text").innerText = 
    "Здесь будет ваше описание этой клетки.";

  document.getElementById("cell-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("cell-modal").classList.add("hidden");
}
