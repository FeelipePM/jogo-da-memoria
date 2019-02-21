const pointBar = (function () {
  const module = {};

  module._style = () => {
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
      `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    return `
      <header class="point-bar">
        <span class="number">0</span>
      </header>
    `;
  };

  return {
    create: module.create
  };
})();
