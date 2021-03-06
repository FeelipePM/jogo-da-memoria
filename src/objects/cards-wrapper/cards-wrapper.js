function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 10px;
    width: 100vw;
  }
  
  .cards-wrapper > .memory-card {
    margin-bottom: 15px;
  }
`;

  $head.insertBefore($style, null);

  $cardsWrapper.addEventListener("click", () => {
    store.qtdActiveMemoryCard = $cardsWrapper.querySelectorAll(
      ".memory-card.-active"
    ).length;
  });

  return $cardsWrapper;
}
