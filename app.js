document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "occhio",
      img: "carte/occhio.jpg",
    },
    {
      name: "atomo",
      img: "carte/atom.png",
    },
    {
      name: "missile",
      img: "carte/rocket.png",
    },
    {
      name: "lampadina",
      img: "carte/lampadina.png",
    },
    {
      name: "occhio",
      img: "carte/occhio.jpg",
    },
    {
      name: "atomo",
      img: "carte/atom.png",
    },
    {
      name: "missile",
      img: "carte/rocket.png",
    },
    {
      name: "lampadina",
      img: "carte/lampadina.png",
    },
    {
      name: "faro",
      img: "carte/faro.jpg",
    },
    {
      name: "faro",
      img: "carte/faro.jpg",
    },
    {
      name: "furgoncino",
      img: "carte/furgoncino.png",
    },
    {
      name: "furgoncino",
      img: "carte/furgoncino.png",
    },
    {
      name: "fiore",
      img: "carte/fiore.jpg",
    },
    {
      name: "fiore",
      img: "carte/fiore.jpg",
    },
    {
      name: "cervello",
      img: "carte/cervello.png",
    },
    {
      name: "cervello",
      img: "carte/cervello.png",
    },
    {
      name: "mask",
      img: "carte/mask.png",
    },
    {
      name: "mask",
      img: "carte/mask.png",
    },
    {
      name: "casa",
      img: "carte/casa.png",
    },
    {
      name: "casa",
      img: "carte/casa.png",
    },
    {
      name: "chiave",
      img: "carte/chiave.png",
    },
    {
      name: "chiave",
      img: "carte/chiave.png",
    },
    {
      name: "mario",
      img: "carte/mario.png",
    },
    {
      name: "mario",
      img: "carte/mario.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());
  const container = document.querySelector("#container");
  const grid = document.querySelector(".grid");
  const failed = document.querySelector("#failed");
  failed.textContent = 0;
  let tentativifalliti = 0;
  let contorovescia = 90;
  let cardsChosen = [];
  let cardsChosenId = [];
  let winarray = [];
  // creo il board

  var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

  function timer() {
    contorovescia = contorovescia - 1;
    if (contorovescia <= 0) {
      clearInterval(counter);
      document.getElementById("timer").innerHTML = 0 + " secs";

      endGame("timeover", winarray.length - tentativifalliti);
      return;
    }

    document.getElementById("timer").innerHTML = contorovescia + " secs";
  }

  function endGame(esit, score) {
    let schermataFinale = document.createElement("div"); //schermatafinale
    schermataFinale.setAttribute("id", "idschermatafinale");

    if (esit === "timeover") {
      let newContent1 = document.createTextNode("Il Tempo e scaduto!");
      schermataFinale.appendChild(newContent1);
      schermataFinale.setAttribute("background-color", "#ff0000");
      schermataFinale.classList.add("bgred");
    }
    if (esit === "win") {
      let newContent1 = document.createTextNode("Nice done!");
      schermataFinale.appendChild(newContent1);
      schermataFinale.setAttribute("background-color", "#00ff00");
      schermataFinale.classList.add("bggreen");
    }
    let newContent = document.createTextNode("Il Tuo punteggio è =" + score);
    schermataFinale.appendChild(newContent);
    document.body.appendChild(schermataFinale);
    schermataFinale.classList.add("schermatafinale");
    console.log(schermataFinale);
    //grid.appendChild("schermataFinale");
  }
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "carte/retro.jpg");
      card.setAttribute("data-id", i);
      card.classList.add("carte");
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
      console.log("eseguita");
    }
  }
  function bg(color) {
    document.body.style.backgroundColor = color;
    setTimeout(bianco, 2000);
    function bianco() {
      document.body.style.backgroundColor = "white";
    }
  }
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      console.log("id", cardsChosenId[0]);
      cards[optionOneId].setAttribute("src", "carte/matched.png");
      cards[optionTwoId].setAttribute("src", "carte/matched.png");
      winarray.push(optionOneId);
      if (winarray.length === cardArray.length / 2) {
        endGame("win", winarray.length - tentativifalliti + contorovescia);
        return;
      }
      bg("#00ff00");
    } else {
      cards[optionOneId].setAttribute("src", "carte/retro.jpg");
      cards[optionTwoId].setAttribute("src", "carte/retro.jpg");
      tentativifalliti++;
      failed.textContent = tentativifalliti;
      bg("red");
    }
    cardsChosenId = [];
    cardsChosen = [];
  }
  function flipCard() {
    let a = this.src.split("/"); //splitto l immagine per permettere solo alle carte girate di essere selezionate
    if (cardsChosen.length < 2 && a[a.length - 1] === "retro.jpg") {
      let cardId = this.getAttribute("data-id");
      this.setAttribute("src", cardArray[cardId].img);
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      console.log(cardId);

      console.log(cardId);
      //console.log(this);
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 300);
      }
    }
  }
  createBoard();
});
