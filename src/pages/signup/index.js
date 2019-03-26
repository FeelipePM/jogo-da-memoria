(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signUpButton = flatButton.render("Sign up", true);

  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("Welcome!");
  const $labelNameCollabCode = labelCollabCode.render("Username");
  const $inputNameCollabCode = inputCollabCode.render("name-example");
  const $labelCollabCode = labelCollabCode.render("E-mail");
  const $inputCollabCode = inputCollabCode.render("example@email.com");
  const $labelPasswordCollabCode = labelCollabCode.render("Password");
  const $inputPasswordCollabCode = inputCollabCode.render("your password");
  const $labelPassConfirmCollabCode = labelCollabCode.render("Cofirm Password");
  const $inputPassConfirmCollabCode = inputCollabCode.render(
    "corfirm your password"
  );

  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $labelNameCollabCode);
  $root.insertAdjacentHTML("beforeend", $inputNameCollabCode);
  $root.insertAdjacentHTML("beforeend", $labelCollabCode);
  $root.insertAdjacentHTML("beforeend", $inputCollabCode);
  $root.insertAdjacentHTML("beforeend", $labelPasswordCollabCode);
  $root.insertAdjacentHTML("beforeend", $inputPasswordCollabCode);
  $root.insertAdjacentHTML("beforeend", $labelPassConfirmCollabCode);
  $root.insertAdjacentHTML("beforeend", $inputPassConfirmCollabCode);
})();
