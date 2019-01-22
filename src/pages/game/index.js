const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

$root.insertAdjacentElement("beforeend", $cardsWrapper);

cards.forEach(card => {
  const $memoryCard = createMemoryCard(card.src, card.side, card.alt);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
});
