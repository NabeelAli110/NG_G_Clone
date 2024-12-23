let randomNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 3;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const message = document.getElementById('message');

    if (!userGuess || userGuess < 1 || userGuess > 20) {
        message.textContent = 'Please enter a valid number between 1 and 20.';
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
        message.className = 'message win';
        endGame();
    } else {
        attempts--;
        if (attempts > 0) {
            message.textContent = `Wrong guess! You have ${attempts} chance(s) left.`;
        } else {
            message.textContent = `You lost! The correct number was ${randomNumber}.`;
            message.className = 'message loss';
            endGame();
        }
    }
}

function endGame() {
    document.getElementById('userGuess').disabled = true;
    document.querySelector('button[onclick="checkGuess()"]').disabled = true;
    document.getElementById('restartButton').style.display = 'inline-block';
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    attempts = 3;
    document.getElementById('userGuess').value = '';
    document.getElementById('userGuess').disabled = false;
    document.querySelector('button[onclick="checkGuess()"]').disabled = false;
    document.getElementById('restartButton').style.display = 'none';
    const message = document.getElementById('message');
    message.textContent = '';
    message.className = 'message';
}