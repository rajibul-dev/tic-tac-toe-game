function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = 'block';
  backdrop.style.display = 'block';
};

function closePlayerConfig() {
  playerConfigOverlay.style.display = 'none';
  backdrop.style.display = 'none';
  form.firstElementChild.classList.remove('error');
  errorP.textContent = '';
  form.firstElementChild.lastElementChild.value = '';
};

function savePlayerNameConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('playername').trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add('error');
    errorP.textContent = 'Please enter a valid name.';
    return;
  };

  const updatedPlayerData = document.getElementById(`player-${editedPlayer}-data`)
  updatedPlayerData.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
};
