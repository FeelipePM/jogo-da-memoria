const $root = document.querySelector("#root");
const $MemoryCard = document.createElement("article");
const $MemoryCardTurned = document.createElement("article");

const $icon = `<img class='icon' 
    src='img/icon-collabcode.png' 
    alt='Mascote CollabCode'>
  </img>`;

const $iconTurned = `<img class='iconTurned' 
    src='img/icon-js.png' 
    alt='Mascote CollabCode'>
  </img>`;

$MemoryCard.classList.add("memory-card");
$MemoryCardTurned.classList.add("memory-card-turned");

$root.insertBefore($MemoryCardTurned, null);
$MemoryCardTurned.insertAdjacentHTML("afterbegin", $iconTurned);

$root.insertBefore($MemoryCard, null);
$MemoryCard.insertAdjacentHTML("afterbegin", $icon);
