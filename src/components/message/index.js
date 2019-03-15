const message = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .message {
        color: #F25A70;
        text-transform: uppercase;
        font-size: 24px;
        position: absolute;
        transform: translateX(-50%);
        top: 40%;
        left: 50%;
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `<h1 class="message">Welcome!<h1>`;
  };

  return {
    render: module.render
  };
})();
