const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
  .memory-card {
    width: 155px;
    height: 155px;
    position: relative;
    transition: transform 400ms ease-in-out;
    transform-style: preserve-3d;
  }
  .memory-card .card {
    width: 100%;
    height: 100%;
    background-color: #f25a70;
    border-radius: 30px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
  }

  .memory-card.-active {
    transform: rotateY(180deg);
  }

  .memory-card.-score {
    transform: rotateY(540deg);
    background-color: green;
    border-radius: 20px;
    transition: all 1000ms;
  }


  .memory-card.-active .card,
  .memory-card.-score .card {
    display: none;
  }

  .memory-card.-active .card.-front,
  .memory-card.-score .card.-front {
    display: flex;
  }
  
  .memory-card .card.-front {
    background-color: #fff;
    transform: rotateY(180deg);
  }
  
  .memory-card .card.-front::before {
    content: "";
    width: 95px;
    height: 95px;
    background-color: #d4d4d4;
    border-radius: 50%;
    position: absolute;
  }

  .memory-card .card > .icon {
    width: 100px;
    height: 100px;
  }
  
  .memory-card .card.-front > .icon {
    position: absolute;
    transform: translateY(-12px);
  }
  `;

  $head.insertBefore($style, null);

  return ({ src, alt }) =>
    `<div class="memory-card" onClick="logic.handleClick(this)"> 
    <article class="card -front">
    <img class='icon' 
      src='${src}' 
      alt='${alt}'
      >
    </img>
    </article>

    <article class="card">
    <img class='icon' 
      src='img/icon-collabcode.png' 
      alt='Mascote CollabCode'
      >
    </img>
    </article>
    </div>
    `;
};

const logic = (function() {
  return {
    handleClick: function($component) {
      if (!$component.classList.contains("-active")) {
        logic.activeMemoryCard($component);
        logic.checkSure();
      }
    },

    activeMemoryCard: function($component) {
      if (store.qtdActiveMemoryCard < 2) {
        $component.classList.add("-active");
      }
    },

    checkSure: function() {
      if (store.qtdActiveMemoryCard === 1) {
        const $activeMemoryCards = document.querySelectorAll(
          ".memory-card.-active"
        );

        const $memoryCard1 = $activeMemoryCards[0]
          .querySelector(".-front .icon")
          .getAttribute("src");
        const $memoryCard2 = $activeMemoryCards[1]
          .querySelector(".-front .icon")
          .getAttribute("src");

        if ($memoryCard1 === $memoryCard2) {
          store.score = store.score + 5;
          console.log("Score:", store.score);

          $activeMemoryCards.forEach($memoryCard => {
            $memoryCard.classList.add("-score");
            $memoryCard.classList.remove("-active");
          });
        } else {
          setTimeout(() => {
            $activeMemoryCards.forEach($memoryCard => {
              $memoryCard.classList.remove("-active");
            });

            store.qtdActiveMemoryCard = 0;
          }, 1000);
        }
      }
    }
  };
})();
