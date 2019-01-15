const $root = document.querySelector("#root");
const $MemoryCard = document.createElement("article");

const $icon = `<img class='icon' 
    src='img/icon-collabcode.png' 
    alt='Mascote CollabCode'>
  </img>`;

$MemoryCard.classList.add("memory-card");

$root.insertBefore($MemoryCard, null);
$MemoryCard.insertAdjacentHTML("afterbegin", $icon);
