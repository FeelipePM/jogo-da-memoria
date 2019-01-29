const memoryCard = () => {

  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
  .memory-card {
    width: 155px;
    height: 155px;
    background-color: #f25a70;
    border-radius: 30px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/img/icon-collabcode.png);
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
  
  .memory-card > .icon {
    display: none;
    width: 100px;
    height: 100px;
  }

  .memory-card.-front > .icon {
    display: block;
    width: 100px;
    height: 100px;
  }
  
  .memory-card.-front {
    background-color: #fff;
    position: relative;
    background-image: none;
  }
  
  .memory-card.-front::before {
    content: "";
    width: 95px;
    height: 95px;
    background-color: #d4d4d4;
    border-radius: 50%;
    position: absolute;
  }
  
  .memory-card.-front > .icon {
    position: absolute;
    transform: translateY(-12px);
  }
  `;

  $head.insertBefore($style, null);

  return ({ src, alt, nameClass }) =>
    ` <article class="memory-card ${nameClass}">
    <img class='icon' 
      src='${src}' 
      alt='${alt}'
      onClick="handleClick()">
    </img>
    </article>
    `;
};
