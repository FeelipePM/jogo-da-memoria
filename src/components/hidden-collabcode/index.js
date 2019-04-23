const hiddenCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .hidden-collabcode {
        position: absolute;
        top: 82vh;
        right: 8vw;
        cursor: pointer;
      }

      .hidden-collabcode.-hidden {
        opacity: 0.3;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (hidden = "") => {
    module._style();
    return `<img class='hidden-collabcode -${hidden}' 
      src='img/hidden.png' 
      alt='Hidden CollabCode'
      >
    </img>`;
  };

  return {
    render: module.render
  };
})();
