const iconCollab = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .collab {
        width: 171px;
        height: 175px;
<<<<<<< HEAD
=======
        position: absolute;
        top: 15%;
        left: 30%;
>>>>>>> 65287fb15ecd5b6c094ed40d272a05040263716c
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
