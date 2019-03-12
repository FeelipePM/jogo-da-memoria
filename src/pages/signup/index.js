(function() {
  const $root = document.querySelector("#root");

  const $flatButton = flatButton.render("Log in");
  const $flatButtonSignUp = flatButton.render("Sign up");

  $root.insertAdjacentHTML("beforeend", $flatButton);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
})();
