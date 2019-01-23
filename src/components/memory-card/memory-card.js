const createMemoryCard = cards =>
  ` <article class="memory-card ${cards.class}">
    <img class='icon' 
      src='${cards.src}' 
      alt='${cards.alt}'
      onClick="handleClick()">
    </img>
    </article>
    `;

const handleClick = () => console.log("Funcionando");
