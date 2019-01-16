const $root = document.querySelector("#root");
const $MemoryCard = document.createElement("article");
const $MemoryCardFront = document.createElement("article");

const $iconCollab = `<img class='icon' 
    src='img/icon-collabcode.png' 
    alt='Mascote CollabCode'>
  </img>`;

const $iconJs = `<img class='icon' 
    src='img/icon-js.png' 
    alt='Icone Livro da Linguaguem Javascript'>
  </img>`;

$MemoryCard.classList.add("memory-card");
$root.insertBefore($MemoryCard, null);

$MemoryCardFront.classList.add("memory-card", "-front");
$root.insertBefore($MemoryCardFront, $MemoryCard);

$MemoryCardFront.insertAdjacentHTML("afterbegin", $iconJs);
$MemoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
