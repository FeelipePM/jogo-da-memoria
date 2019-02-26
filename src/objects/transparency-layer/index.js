const transparencyLayer = (function () {

  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .transparency-layer {
        background-color: rgba(255,255,255,0.6);
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
      }
    `;

    $head.insertBefore($style, null);
  }

  module.render = () => {
    module._style();

    return `
      <div class="transparency-layer"></div>
    `;
  }

  return {
    render: module.render,
  }

})();