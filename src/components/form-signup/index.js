const formSignUp = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        padding: 0 35px 40px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $userNameLabel = labelCollabCode.render("Username");
    const $userNameInput = inputCollabCode.render("name-example", "text");

    const $emailLabel = labelCollabCode.render("E-mail");
    const $emailInput = inputCollabCode.render("example@email.com", "email");

    const $passwordLabel = labelCollabCode.render("Password");
    const $passwordInput = inputCollabCode.render("your password", "password");

    const $confirmPasswordLabel = labelCollabCode.render("Cofirm Password");
    const $confirmPasswordInput = inputCollabCode.render(
      "corfirm your password",
      "password"
    );

    const $btnCollabCode = btnCollabCode.render("Signup");

    return `
      ${$userNameLabel}
      ${$userNameInput}

      ${$emailLabel}
      ${$emailInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}

      ${$btnCollabCode}
    `;
  };

  module.render = () => {
    module._style();
    return `
        <form class="form-signup" action="" method="POST">${module._children()}</form>
      `;
  };

  return {
    render: module.render
  };
})();
