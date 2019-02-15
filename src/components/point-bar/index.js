const pointBar = (function() {
  const module = {};

  module._style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .point-bar {
        background-color: #6c5ce7;
        height: 40px;
        text-align: center;
        font-family: 'Comfortaa', sans-serif;
      }

      .point-bar > .number {
        font-size: 20px;
        line-height: 40px;
        color: #FFF;
        font-weight: bold;
      }

      .start {
        display: flex;
        justify-content: center;
      }

      .start::after {
        content: "";
        padding: 40px;
        position: absolute;
        bottom: 10px;
        background-color: #fff;
        border-radius: 50%;
        z-index: 1;
        box-shadow: 0px 0px 10px 3px #636e72;
        border: 5px solid #6c5ce7;
      }

      .text {
        text-transform: uppercase;
        position: absolute;
        bottom: 43px;
        z-index: 2;
        color: #6c5ce7;
        font-weight: bold;
      }

      `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    return `
      <header class="point-bar">
        <span class="start">
        <span class="text">Start</span>
        </span>
        <span class="number">0</span>
      </header>
    `;
  };

  return {
    create: module.create
  };
})();
