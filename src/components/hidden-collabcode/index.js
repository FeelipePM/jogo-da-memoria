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
    return `<img class='hidden-collabcode ${hidden}'         onClick="hiddenCollabCode.handleClick(this)"
      src='img/hidden.png' 
      alt='Hidden CollabCode'
      >
    </img>`;
  };

  module.handleClick = $component => {
    const passHidden = !$component.classList.contains("-hidden");

    passHidden
      ? module._activeHidden($component)
      : module._inactiveHidden($component);
  };

  module._activeHidden = $component => {
    $component.classList.add("-hidden");
    document.querySelector(".input-collabcode.-password").type = "text";
  };

  module._inactiveHidden = $component => {
    $component.classList.remove("-hidden");
    document.querySelector(".input-collabcode.-password").type = "password";
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
