const flatButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button {
        background-color: #EAE6DA;
        color: #FFFCEE;
        font-size: 24px;
        font-weight: bold;
        width: 50%;
        height: 176px;
        text-transform: uppercase;
      }

      .flat-button.-active {
        background-color: #F25A70;
        color: #FFF;
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (content = "", variation) => {
    module._style();
    return `<button class="flat-button ${variation}">${content}</button>`;
  };

  return {
    render: module.render
  };
})();
