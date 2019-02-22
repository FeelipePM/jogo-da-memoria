function createCardsWrapper() {
  const $cardsLayer = document.createElement("div");
  const $cardsWrapper = document.createElement("section");
  $cardsLayer.classList.add("cards-layer");
  $cardsWrapper.classList.add("cards-wrapper");
  $cardsWrapper.insertAdjacentElement("beforeend", $cardsLayer);

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
  .cards-layer {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    width: 100vw;
    height: 93vh;
    z-index: 1;
  }

  .cards-layer.-start {
    z-index: 0;
    transition-property: z-index;
    transition-timing-function: ease-in-out;
    transition-duration: 1.5s;
  }

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
