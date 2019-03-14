const iconCollab = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .collab {
        width: 171px;
        height: 175px;
      }
      
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `<img class="collab" src="img/icon-collabcode.png" alt="Icone Collabcode"></img>`;
  };

  return {
    render: module.render
  };
})();
