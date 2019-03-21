(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signUpButton = flatButton.render("Sign up", true);

  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("Welcome!");
  const $inputField = inputField.render("E-mail", "example@email.com");

  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $inputField);
})();
