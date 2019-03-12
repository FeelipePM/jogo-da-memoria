(function() {
  const $root = document.querySelector("#root");

  const $flatButton = flatButton.render();
  const $flatButtonSignUp = flatButton.render();

  $root.insertAdjacentHTML("beforeend", $flatButton);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
})();
