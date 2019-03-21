const inputField = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

      .input-field {
        display: grid;
        justify-content: center;
        font-family: Comfortaa;
      }

      .label-email {
        opacity: 0.5;
        color: #3a4042;
      }

      .input {
        width: 302px;
        height: 40px;
        font-size: 18px;
        color: #3a4042;
        border: none;
        border-bottom: solid 1px rgba(58, 64, 66, 0.5);
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (label, input) => {
    module._id++;
    module._style();
    return `
    <form class="input-field">
      <Label class="label-email">${label}</label>
      <input class="input" placeholder="${input}"></input>
    </form>`;
  };

  return {
    render: module.render
  };
})();
