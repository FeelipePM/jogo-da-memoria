const labelCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .label-collabcode {
        display: block;
        color: #3a4042;
        font-size: 16px;
        opacity: 0.5;
      }

      .label-collabcode.-forget {
        text-align: right;
        margin-bottom: 113px;
      }

    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (content, classe = "") => {
    module._style();
    return `<label class="label-collabcode -${classe}">${content}</label>`;
  };

  return {
    render: module.render
  };
})();
