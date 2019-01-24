const createMemoryCard = ({ src, alt, nameClass }) =>
  ` <article class="memory-card ${nameClass}">
    <img class='icon' 
      src='${src}' 
      alt='${alt}'
      onClick="handleClick()">
    </img>
    </article>
    `;

const handleClick = () => console.log("Funcionando");

function createCss() {
  const $head = document.querySelector("head");
  const $style = document.createElement("link");
  $style.rel = "stylesheet";
  $style.href = "src/components/memory-card/styles.css";
  $head.insertBefore($style, null);
}

createCss();
