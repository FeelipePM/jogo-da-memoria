const gameButton = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .game-button {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          border: 3px solid #6c5ce7;
          color: #6c5ce7;
          background-color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          font-family: 'Comfortaa', sans-serif;
          font-size: 0.9em;
          cursor: pointer;
          box-shadow: 1px 1px 5px #3a4042;
          transition: opacity 200ms linear;
        }
        .game-button.-disable {
          opacity: 0;
        }
      `;
    $head.insertBefore($style, null);
  }

  module.render = content => {
    module._style();
    return `
      <button class="game-button">${content}</button>
    `;
  };


  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();


