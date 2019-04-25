const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login {
        padding: 0 35px 40px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $userNameLabel = labelCollabCode.render("Username or E-mail");
    const $userNameInput = inputCollabCode.render({
      placeholder: "example@email.com",
      type: "email"
    });

    const $passwordLabel = labelCollabCode.render("Password");

    const $passwordInput = inputCollabCode.render(
      "your password",
      "password",
      "password"
    );

    const $hiddenCollabCode = hiddenCollabCode.render();

    const $passwordInput = inputCollabCode.render({
      placeholder: "your password",
      type: "password"
    });

    const $linkCollab = linkCollab.render({
      href: "#",
      content: "Forget password?"
    });

    const $btnCollabCode = btnCollabCode.render("Login");

    return `
      ${$userNameLabel}
      ${$userNameInput}

      ${$passwordLabel}      
      ${$passwordInput}

      ${$linkCollab}

      ${$btnCollabCode}

      ${$hiddenCollabCode}
    `;
  };

  module.render = () => {
    module._style();
    return `
        <form class="form-login" action="" method="POST">${module._children()}</form>
      `;
  };

  return {
    render: module.render
  };
})();
