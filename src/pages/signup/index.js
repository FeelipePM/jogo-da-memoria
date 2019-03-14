(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", "");
  const $signUpButton = flatButton.render("Sign up", "-active");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
})();
