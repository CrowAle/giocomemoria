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

  //SETTO LE VARIABILI DEL GIOCO
  const container = document.querySelector("#container");
  const grid = document.querySelector("#grid");
  const failed = document.querySelector("#failed");
  failed.textContent = 0;
  let tentativifalliti = 0;
  let contorovescia;
  let cardsChosen = [];
  let cardsChosenId = [];
  let winarray = [];
  //CREO IL PRIMO BOARD ANCHE SE è FONDAMENTALMENTE UTILE SOLO PER MOSTRARE IL RETRO DELLE CARTE
  createBoard();
  // DICHIARO LE PRIME VARIABILI DI START
  const start = document.querySelector("#start");
  start.addEventListener("click", startgame);
  let giocoincorso = false;
  let counter;
  //FUNZIONE CHE DA IL VIA AL GIOCO
  function startgame() {
    //do alla variabile gioco in corso il true
    start.textContent = "Re-Start";
    start.style.backgroundColor = "yellow";
    giocoincorso = true;
    // resetto tutte le variabili
    cardArray.sort(() => 0.5 - Math.random());
    tentativifalliti = 0;
    failed.textContent = tentativifalliti;
    contorovescia = 90;
    cardsChosen = [];
    cardsChosenId = [];
    winarray = [];
    //ricreo il tavolo da gioco
    createBoard();

    //se e gia in corso un altro gioco resetto il timer
    if (counter !== undefined) {
      clearInterval(counter);
    }
    //creo il nuovo timer
    counter = setInterval(timer, 1000);
    function timer() {
      contorovescia = contorovescia - 1;
      // TEMPO SCADUTO
      if (contorovescia <= 0) {
        clearInterval(counter);
        document.getElementById("timer").innerHTML = 0 + " secs";
        endGame("timeover", winarray.length - tentativifalliti);
        return;
      }
      // AGGIORNO IL DIPLAY DEI SECONDI MANCANTI
      document.getElementById("timer").innerHTML = contorovescia + " secs";
    }
  }

  //FUNZIONE PER ELIMINARE IL DIV DI ESITO DEL GIOCO
  function destroy() {
    let a = document.getElementById("idschermatafinale");
    a.remove();
    document.body.removeEventListener("click", destroy);
  }
  //FUNZIONE CHE GESTISCE LA FINE DEL GIOCO O IN UN MODO O NELL ALTRO
  function endGame(esit, score) {
    let schermataFinale = document.createElement("div"); //schermatafinale
    schermataFinale.setAttribute("id", "idschermatafinale");
    //schermataFinale.addEventListener("click", destroy);
    document.body.addEventListener("click", destroy);

    let testo1 = document.createElement("div"); //schermatafinale
    testo1.setAttribute("id", "testo1");
    testo1.classList.add("testo");
    schermataFinale.appendChild(testo1);
    let testo = document.createElement("div"); //schermatafinale
    testo.setAttribute("id", "testo");
    testo.classList.add("testo");
    schermataFinale.appendChild(testo);
    if (esit === "timeover") {
      let newContent1 = document.createTextNode(" Time Over ! ");
      testo1.appendChild(newContent1);
      //schermataFinale.setAttribute("background-color", "#ff0000");
      schermataFinale.classList.add("bgred");
    }
    if (esit === "win") {
      let newContent1 = document.createTextNode(" Nice done !");
      testo1.appendChild(newContent1);
      //schermataFinale.setAttribute("background-color", "#00ff00");
      schermataFinale.classList.add("bggreen");
      clearInterval(counter);
    }
    let newContent = document.createTextNode("Your score is = " + score);
    testo.appendChild(newContent);
    document.body.appendChild(schermataFinale);
    schermataFinale.classList.add("schermatafinale");

    giocoincorso = false;
    start.textContent = "Start";
    start.style.backgroundColor = "greenyellow";
  }
  function createBoard() {
    grid.innerHTML = "";
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
  //QUESTA FUNZIONE DA UN LAMPO ROSSO IN CASO DI ERRORE E UN LAMPO VERDE IN CASO DI ACCOPPIAMENTO
  function bg(color) {
    document.body.style.backgroundColor = color;
    setTimeout(bianco, 2000);
    function bianco() {
      document.body.style.backgroundColor = "white";
    }
  }
  // GESTISCO IL MATCH
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
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
  // FUNZIONE PER GIRARE LE CARTE
  function flipCard() {
    let a = this.src.split("/"); //splitto l immagine per permettere solo alle carte girate di essere selezionate
    if (
      cardsChosen.length < 2 &&
      a[a.length - 1] === "retro.jpg" &&
      giocoincorso
    ) {
      let cardId = this.getAttribute("data-id");
      this.setAttribute("src", cardArray[cardId].img);
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);

      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 300);
      }
    }
  }
});
