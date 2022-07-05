function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOver.firstElementChild.innerHTML =
    '<span id="winner-name">PLAYER NAME</span> Won';
  gameOver.style.display = 'none';

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      let gameBoardItems = gameFields[gameBoardIndex];
      gameBoardItems.textContent = '';
      gameBoardItems.classList.remove('disabled')
      gameBoardIndex++
    };
  };
};

function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Plese set the names for both players.')
    return;
  }

  resetGameStatus();

  activePlayerName.textContent = players[activePlayer].name;
  gameField.style.display = 'block';
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1
  } else {
    activePlayer = 0
  };
  activePlayerName.textContent = players[activePlayer].name;
};

function selectGameField(event) {
  if (gameIsOver) {
    return;
  }

  const selectedField = event.target;

  const selectedCol = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedCol] > 0) {
    return;
  };

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add('disabled');

  gameData[selectedRow][selectedCol] = activePlayer + 1;

  const winnerID = checkForGameOver();

  currentRound++;

  if (winnerID === 0) {
    console.log('Game in progress...');
  } else if (winnerID === 1) {
    console.log(`Player ${winnerID} won!`);
  } else if (winnerID === 2) {
    console.log(`Player ${winnerID} won!`);
  } else {
    console.log('Draw!');
  };

  if (winnerID !== 0) {
    endGame(winnerID);
    document.querySelector('#turn-p').style.display = 'none';
  }

  switchPlayer();
}

function checkForGameOver() {

  // Checking horizontal equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    };
  };

  // Checking vertical equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    };
  };

  // Diagonal: top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // Diagonal: top left to bottom right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  };
  return 0;
};

function endGame(winnerIDPara) {
  gameIsOver = true;
  gameOver.style.display = 'block';

  if (winnerIDPara > 0) {
    const winnerName = players[winnerIDPara - 1].name;
    document.querySelector('#winner-name').textContent = winnerName;
  } else {
    gameOver.firstElementChild.textContent = `It's a draw!`;
  }

};