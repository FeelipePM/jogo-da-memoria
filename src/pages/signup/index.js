(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signUpButton = flatButton.render("Sign up", true);
  const $iconCollab = iconCollab.render();
<<<<<<< HEAD
=======
  const $message = message.render();
>>>>>>> 65287fb15ecd5b6c094ed40d272a05040263716c

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
  $root.insertAdjacentHTML("beforeend", $iconCollab);
<<<<<<< HEAD
=======
  $root.insertAdjacentHTML("beforeend", $message);
>>>>>>> 65287fb15ecd5b6c094ed40d272a05040263716c
})();
