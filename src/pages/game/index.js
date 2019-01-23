const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

cards = [
  {
    src: "img/icon-collabcode.png",
    alt: "Mascote CollabCode"
  },
  {
    class: "-front",
    src: "img/icon-js.png",
    alt: "Icone Linguagem JS"
  },
  {
    class: "-front",
    src: "img/icon-java.png",
    alt: "Icone Linguagem Java"
  },
  {
    class: "-front",
    src: "img/icon-bug.png",
    alt: "Icone Bug"
  }
];

const $memoryCard = createMemoryCard(this.cards[0]);

const $memoryCardFront = createMemoryCard(this.cards[1]);

const $memoryCardJava = createMemoryCard(this.cards[2]);

const $memoryCardBug = createMemoryCard(this.cards[3]);

$root.insertAdjacentElement("beforeend", $cardsWrapper);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
