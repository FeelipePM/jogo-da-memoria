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

  module.validation = email => {
    const regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;

    if (email.value.trim().match(regex) == null) {
      return console.log(true);
    } else {
      if (email.value == "") {
        return console.log(false);
      } else {
        return console.log(true);
      }
    }
  };

  module.render = (label, input) => {
    module._style();
    return `
    <form class="input-field">
      <Label class="label-email">${label}</label>
      <input class="input" placeholder="${input}" onkeyup="inputField.validation(this)">
    </form>`;
  };

  return {
    render: module.render,
    validation: module.validation
  };
})();
