const $root = document.querySelector("#root");

const $iconCollab = `<img class='icon' 
    src='img/icon-collabcode.png' 
    alt='Mascote CollabCode'>
  </img>`;

const $iconJs = `<img class='icon' 
    src='img/icon-js.png' 
    alt='Icone Livro da Linguaguem Javascript'>
  </img>`;

createMemoryCardFront();

for (let card = 1; card < 10; card++) {
  createMemoryCard();
}

function createMemoryCard() {
  const $MemoryCard = document.createElement("article");

  $MemoryCard.classList.add("memory-card");
  $root.insertBefore($MemoryCard, null);
  $MemoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront() {
  const $MemoryCardFront = document.createElement("article");

  $MemoryCardFront.classList.add("memory-card", "-front");
  $root.insertBefore($MemoryCardFront, null);
  $MemoryCardFront.insertAdjacentHTML("afterbegin", $iconJs);
}
