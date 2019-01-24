const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCardJS = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-js.png",
  alt: "Icone Linguagem JS"
});

const $memoryCardBug = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-bug.png",
  alt: "Icone Bug"
});

const $memoryCardJava = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-java.png",
  alt: "Icone Linguagem Java"
});

const $memoryCard = createMemoryCard({
  src: "img/icon-collabcode.png",
  alt: "Mascote Collabcode"
});

$root.insertAdjacentElement("beforeend", $cardsWrapper);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
