const memoryCard = () => {

  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
  .memory-card {
    width: 155px;
    height: 155px;
    position: relative;
  }
  .memory-card .card {
    width: 100%;
    height: 100%;
    background-color: #f25a70;
    border-radius: 30px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
  }

  .memory-card.-active .card {
    display: none;
  }

  .memory-card.-active .card.-front {
    display: flex;
  }
  
  .memory-card .card.-front {
    background-color: #fff;
  }
  
  .memory-card .card.-front::before {
    content: "";
    width: 95px;
    height: 95px;
    background-color: #d4d4d4;
    border-radius: 50%;
    position: absolute;
  }

  .memory-card .card > .icon {
    width: 100px;
    height: 100px;
  }
  
  .memory-card .card.-front > .icon {
    position: absolute;
    transform: translateY(-12px);
  }
  `;

  $head.insertBefore($style, null);

  return ({ src, alt }) =>
    `<div class="memory-card" onClick="handleClick(this)"> 
    <article class="card -front">
    <img class='icon' 
      src='${src}' 
      alt='${alt}'
      >
    </img>
    </article>

    <article class="card">
    <img class='icon' 
      src='img/icon-collabcode.png' 
      alt='Mascote CollabCode'
      >
    </img>
    </article>
    </div>
    `;
};


const handleClick = $component => {
  $component.classList.toggle("-active");
}
