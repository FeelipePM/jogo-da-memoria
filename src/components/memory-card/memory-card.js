function createMemoryCard() {
  const $memoryCard = `
  <article class="memory-card">
  <img class='icon' 
    src='img/icon-collabcode.png' 
    alt='Mascote CollabCode'
    onClick="handleClick()">
  </img>
  </article>`;

  return $memoryCard;
}

function createMemoryCardFront() {
  const $memoryCard = `
  <article class="memory-card -front">
  <img class='icon' 
    src='img/icon-js.png' 
    alt='Livro JavaScript'
    onClick="handleClick()">
  </img>
  </article>`;

  return $memoryCard;
}

function handleClick() {
  console.log("Funcionando");
}
