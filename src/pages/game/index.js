const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardFront = createMemoryCardFront();

for (let card = 0; card < 2; card++) {
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
}

for (let card = 0; card < 6; card++) {
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
}

$root.insertAdjacentElement("beforeend", $cardsWrapper);
