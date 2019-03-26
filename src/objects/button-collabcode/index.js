const buttonCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .button-collabcode {
        width: 100%;
        height: 48px;
        border-radius: 24px;
        background-color: #f25a70;
        font-size: 14px;
        color: #fff;
        text-transform: uppercase;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = content => {
    module._style();

    return `<button class="button-collabcode">${content}</button>`;
  };

  return {
    render: module.render
  };
})();
