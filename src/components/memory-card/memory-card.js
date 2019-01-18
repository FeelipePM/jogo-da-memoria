function createMemoryCard() {
  const $MemoryCard = document.createElement("article");

  const $iconCollab = `<img class='icon' 
    src='img/icon-collabcode.png' 
    alt='Mascote CollabCode'>
  </img>`;

  $MemoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($MemoryCard, null);
  $MemoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront() {
  const $MemoryCardFront = document.createElement("article");

  const $iconJs = `<img class='icon' 
    src='img/icon-js.png' 
    alt='Icone Livro da Linguaguem Javascript'>
  </img>`;

  $MemoryCardFront.classList.add("memory-card", "-front");
  $wrapCards.insertBefore($MemoryCardFront, null);
  $MemoryCardFront.insertAdjacentHTML("afterbegin", $iconJs);
}
