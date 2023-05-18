const deck = [];
for (let i = 1; i <= 50; i++) {
  deck.push(`card-${i}.png`);
}

shuffle(deck);

const deckElem = document.querySelector(".deck");
const topSquareElem = document.querySelector(".top-square");
const bottomSquareElem = document.querySelector(".bottom-square");

deckElem.addEventListener("click", () => {
  if (deck.length > 0) {
    const card = deck.pop();
    deckElem.style.backgroundImage = `url(${card})`;
    if (card === "card-50.png") {
      setTimeout(() => {
        alert("Game over!");
      }, 0); // 1-second delay
    }
  }
});

topSquareElem.addEventListener("click", () => {
  if (deck.length > 0) {
    const card = deck.pop();
    topSquareElem.style.backgroundImage = `url(${card})`;
    if (card === "card-50.png") {
      setTimeout(() => {
        alert("Game over!");
      }, 0); // 1-second delay
    }
  }
});

bottomSquareElem.addEventListener("click", () => {
  if (deck.length > 0) {
    const card = deck.pop();
    bottomSquareElem.style.backgroundImage = `url(${card})`;
    if (card === "card-50.png") {
      setTimeout(() => {
        alert("Game over!");
      }, 0); // 1-second delay
    }
  }
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  
  // Swap the last card with a random card to avoid always having the same final card
  const lastIndex = array.length - 1;
  const randomIndex = Math.floor(Math.random() * lastIndex);
  [array[lastIndex], array[randomIndex]] = [array[randomIndex], array[lastIndex]];
  
  return array;
}
