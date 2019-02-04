const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const $memoryCardJS = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Icone Linguagem JS"
});

const $memoryCardBug = createMemoryCard({
  src: "img/icon-bug.png",
  alt: "Icone Bug"
});

const $memoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Icone Linguagem Java"
});

const $memoryCardWoman = createMemoryCard({
  src: "img/icon-woman.png",
  alt: "Icone Mulher"
});

$root.insertAdjacentElement("beforeend", $cardsWrapper);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);

$root.insertAdjacentElement("beforeend", $cardsWrapper);

const $cardMemory = document.querySelectorAll(".memory-card");