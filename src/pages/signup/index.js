(function() {
  const $root = document.querySelector("#root");

  const $flatButton = flatButton.render("Log in", "-inactive");
  const $flatButtonSignUp = flatButton.render("Sign up", "-active");

  $root.insertAdjacentHTML("beforeend", $flatButton);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
})();
