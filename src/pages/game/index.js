createMemoryCardFront();

for (let card = 1; card < 8; card++) {
  createMemoryCard();
}

const $cards = document.querySelectorAll(".memory-card");

$cards.forEach(($card, key) => {
  $card.addEventListener("click", event => {
    event.preventDefault();
    console.log("Funcionando", key);
  });
});
