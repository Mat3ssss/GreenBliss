function chooseOption(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const result = getResult(playerChoice, computerChoice);

  document.getElementById('result').innerHTML = `Hráč vybral: ${playerChoice}<br>Počítač vybral: ${computerChoice}<br>Výsledek: ${result}`;
}

function getResult(player, computer) {
  if (player === computer) {
    return 'Remíza!';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'Hráč vyhrává!';
  } else {
    return 'Počítač vyhrává!';
  }
}