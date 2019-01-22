const cards = [
  {
    side: "front",
    src: "js",
    alt: "Livro Javascript"
  },
  {
    side: "front",
    src: "js",
    alt: "Livro Javascript"
  },
  {
    side: "back",
    src: "collabcode",
    alt: "Gueio - Mascote da CollabCode"
  },
  {
    side: "back",
    src: "collabcode",
    alt: "Gueio - Mascote da CollabCode"
  },
  {
    side: "back",
    src: "collabcode",
    alt: "Gueio - Mascote da CollabCode"
  },
  {
    side: "back",
    src: "collabcode",
    alt: "Gueio - Mascote da CollabCode"
  },
  {
    side: "back",
    src: "collabcode",
    alt: "Gueio - Mascote da CollabCode"
  },
  {
    side: "back",
    src: "collabcode",
    alt: "Gueio - Mascote da CollabCode"
  }
];

const createMemoryCard = (src, side, alt) => {
  const $memoryCard = `
  <article class="memory-card -${side}">
  <img class='icon' 
    src='img/icon-${src}.png' 
    alt='${alt}'
    onClick="handleClick()">
  </img>
  </article>`;

  return $memoryCard;
};

function handleClick() {
  console.log("Funcionando");
}
