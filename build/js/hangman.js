class GameInfo {
  constructor(word, remainingGuesses, lettersGuessed, lettersWrong) {
    this.word = [...word.toLowerCase()];
    this.remainingGuesses = this.word.length;
    this.lettersGuessed = [];
    this.lettersWrong = [];
  }

}

class UI {
  static getPuzzle(hangman) {
    let puzzle = '';
    hangman.word.map(letter => {
      if (hangman.lettersGuessed.includes(letter) || letter === ' ') {
        puzzle = puzzle += letter;
      } else {
        puzzle += '*';
      }
    });
    return puzzle;
  }

  static getLetter(hangman) {
    let letterInput = document.getElementById('letter-input').value;

    if (hangman.lettersWrong.includes(letterInput) || hangman.lettersGuessed.includes(letterInput)) {
      // Show alert
      console.log('Guess a new letter.');
    } else {
      if (hangman.word.includes(letterInput)) {
        hangman.lettersGuessed.push(letterInput);
      } else {
        hangman.lettersWrong.push(letterInput);
        hangman.remainingGuesses -= 1;
        document.getElementById('ui-display-health').lastChild.remove();
      } // Display updated game information on submit


      displayWord.innerHTML = '<h2>' + UI.getPuzzle(game).toUpperCase() + '</h2>';
      displayLetters.innerHTML = '<h2>' + game.lettersWrong.join('').toUpperCase() + '</h2>';
    }
  }

  static setHealth(hangman) {
    let displayHealth = document.getElementById('ui-display-health');
    hangman.word.map(letter => {
      displayHealth.innerHTML += '<i class="fas fa-heart fa-large ui-display-health"></i>';
    });
  }

  static showAlerts(message, className, iconClass) {
    let alert = "<div class=\"alert alert-".concat(className, "\"><i class=\"fas ").concat(iconClass, "\"></i>").concat(message, "</div>");
    $('.ui-display-alert').html(alert);
    setTimeout(function () {
      $('.alert').fadeOut(500);
    }, 2000);
  }

}

const game = new GameInfo('escalator');
UI.getPuzzle(game);
UI.setHealth(game);
let displayWord = document.getElementById('ui-display-word');
let displayLetters = document.getElementById('ui-display-letters');
const guessButton = document.getElementById('input-form');
displayWord.innerHTML = '<h2>' + UI.getPuzzle(game) + '</h2>';
guessButton.addEventListener('submit', function (e) {
  e.preventDefault();
  UI.getPuzzle(game);
  UI.getLetter(game); // Clear the input on submit

  document.getElementById('letter-input').value = ''; // Alert game over

  if (game.remainingGuesses < 1) {
    UI.showAlerts('Game over, try again', 'danger');
  } // Alert win


  if (!displayWord.textContent.includes('*')) {
    UI.showAlerts('Congratulations, you win!', 'success');
  }
});
