let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  }
];

const editPlayer1Btn = document.getElementById('edit-btn-player-1');
const editPlayer2Btn = document.getElementById('edit-btn-player-2');
const form = document.querySelector('form');
const errorP = document.getElementById('config-errors');
const gameField = document.getElementById('game-field');
const gameOver = document.getElementById('game-over');

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const cancelConfigBtn = document.getElementById('cancel-config-btn')
const startGameBtn = document.getElementById('start-game-btn');
const gameFields = document.querySelectorAll('#game-board li');
const activePlayerName = document.getElementById('active-player-name');

editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

form.addEventListener('submit', savePlayerNameConfig);

startGameBtn.addEventListener('click', startNewGame);

for (const gameSquare of gameFields) {
  gameSquare.addEventListener('click', selectGameField)
};