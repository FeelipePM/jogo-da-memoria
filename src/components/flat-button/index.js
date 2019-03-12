const flatButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button {
        color: #fffcee;
        font-size: 24px;
        font-weight: bold;
        width: 186px;
        height: 176px;
        text-transform: uppercase;
      }

      .flat-button.-inactive {
        background-color: #EAE6DA;
      }

      .flat-button.-active {
        background-color: #F25A70;
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (content, test) => {
    module._style();
    return `<button class="flat-button ${test}">${content}</button>`;
  };

  return {
    render: module.render
  };
})();
