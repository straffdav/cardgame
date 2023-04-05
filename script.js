var cardStack = document.querySelector('.container');
var cards = document.querySelectorAll('.card');
var tragedyCard = document.getElementById('tragedy-card');

var isGameOver = false;
var currentCardIndex = 0;

// Shuffle the cards randomly
var shuffledCards = Array.from(cards).sort(function() {
  // Generate a random number between 0 and 1
  var random = Math.random();

  // Set a lower probability for the tragedy card to show up
  if (random < 0.001) {
    // Place the tragedy card at the beginning of the array
    return -1;
  } else {
    // Shuffle the other cards randomly
    return 0.5 - Math.random();
  }
});

// Hide all cards except the first one
for (var i = 1; i < shuffledCards.length; i++) {
  shuffledCards[i].classList.add('hidden');
}

// Add click event listener to card stack
cardStack.addEventListener('click', function() {
  if (!isGameOver && currentCardIndex < shuffledCards.length) {
    // Show next card
    shuffledCards[currentCardIndex].classList.add('hidden');
    currentCardIndex++;
    if (currentCardIndex < shuffledCards.length) {
      shuffledCards[currentCardIndex].classList.remove('hidden');
    }
  }
});

// Add click event listener to tragedy card
tragedyCard.addEventListener('click', function() {
  if (!isGameOver) {
    // End game
    alert('Game over!');
    isGameOver = true;
  }
});
