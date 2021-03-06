const inputCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");

    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode {
        display: block;
        width: 100%;
        color: #3a4042;
        font-size: 18px;
        font-weight: bold;
        padding-top: 12px;
        padding-bottom: 12px;
        border-bottom: 2px solid rgba(58,64, 66, 0.5);
      }

      .input-collabcode + .label-collabcode {
        margin-top: 30px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (content = "", type, hidden) => {
    module._style();
    return `<input class="input-collabcode -${hidden}" type="${type}" placeholder="${content}">`;
    
  module.render = ({ placeholder = "", type = "text" }) => {
    module._style();

    return `<input class="input-collabcode" type="${type}" placeholder="${placeholder}">`;

  };

  return {
    render: module.render
  };
})();
