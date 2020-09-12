document.addEventListener("DOMContentLoaded", () => {
  const percorsocarte = "carte/";
  const imgArray = [
    { name: "occhio", img: percorsocarte + "occhio.jpg" },
    { name: "atomo", img: percorsocarte + "atom.png" },
    { name: "missile", img: percorsocarte + "rocket.png" },
    { name: "lampadina", img: percorsocarte + "lampadina.png" },
    { name: "faro", img: percorsocarte + "faro.jpg" },
    { name: "furgoncino", img: percorsocarte + "furgoncino.png" },
    { name: "fiore", img: percorsocarte + "fiore.jpg" },
    { name: "funkman", img: percorsocarte + "funkman.jpg" },
    { name: "mela", img: percorsocarte + "mela.jpg" },
    { name: "southlady", img: percorsocarte + "southlady.jpg" },
    { name: "cervello", img: percorsocarte + "cervello.png" },
    { name: "mask", img: percorsocarte + "mask.png" },
    { name: "casa", img: percorsocarte + "casa.png" },
    { name: "chiave", img: percorsocarte + "chiave.png" },
    { name: "mario", img: percorsocarte + "mario.png" },
    { name: "asino", img: percorsocarte + "asino.png" },
    { name: "kitty", img: percorsocarte + "kitty.png" },
    { name: "x", img: percorsocarte + "x.png" },
    { name: "angelo", img: percorsocarte + "angelo.png" },
    { name: "man", img: percorsocarte + "man.png" },
    { name: "fioreverde", img: percorsocarte + "fioreverde.png" },
    { name: "lente", img: percorsocarte + "lente.png" },
    { name: "dollaro", img: percorsocarte + "dollaro.png" },
    { name: "robot", img: percorsocarte + "robot.png" },
    { name: "nota", img: percorsocarte + "nota.jpg" },
    { name: "carrello", img: percorsocarte + "carrello.png" },
    { name: "doraemon", img: percorsocarte + "doraemon.jpg" },
    { name: "anguria", img: percorsocarte + "anguria.jpg" },
    { name: "blackcat", img: percorsocarte + "blackcat.png" },
    { name: "free", img: percorsocarte + "free.png" },
    { name: "merdina", img: percorsocarte + "merdina.jpg" },
    { name: "smile", img: percorsocarte + "smile.jpg" },
    { name: "sole", img: percorsocarte + "sole.jpg" },
    { name: "stella", img: percorsocarte + "stella.jpg" },

    { name: "wifi", img: percorsocarte + "wifi.png" },
  ];
  let cardArray = [];
  function costruisciarray() {
    cardArray = [];
    imgArray.sort(() => 0.5 - Math.random());
    for (let index = 0; index < 12; index++) {
      cardArray.push(imgArray[index]);
      cardArray.push(imgArray[index]);
    }
    /*  imgArray.forEach((element) => {
      cardArray.push(element);
      cardArray.push(element);
    }); */
  }
  //card options l ho temporaneamente sospeso lo costruisco dinamicamente e a questo ho aggiunto una a al nome
  const cardArraya = [
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
  costruisciarray();
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
    costruisciarray();
    cardArray.sort(() => 0.5 - Math.random());
    tentativifalliti = 0;
    failed.textContent = tentativifalliti;
    contorovescia = 100;
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
    //+++++++++++++++++
    inseriscipunteggio(score);
    visualizzapunteggio(scoreboard);
    //+++++++++++
    schermataFinale.classList.add("schermatafinale");

    giocoincorso = false;
    start.textContent = "Start";
    start.style.backgroundColor = "greenyellow";
  }
  function createBoard() {
    // costruisciarray();
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
  //    ************************************************** */
  let nome = "";
  let scoreboard = [
    { nome: "Alessio", punteggio: 20 },
    { nome: "Alessio", punteggio: 7 },
    { nome: "Mamma", punteggio: 40 },
  ];

  function inseriscipunteggio(punteggio) {
    if (nome === "") {
      nome = prompt("Come ti chiami");
    }
    // queste due righe davano la possibilita di aggiungere i punteggi a var temporanea quelle dopo settano un coockie
    //let nuovopunteggio = { nome, punteggio };
    //scoreboard.push(nuovopunteggio);
    aggiungipunteggiocoockie(nome, punteggio);
    scoreboard = getCookie("coockiememoria");
  }

  function visualizzapunteggio(arraypunteggio) {
    attacca(
      "idpunteggio",
      "idschermatafinale",
      ["punteggio", "titolo"],
      "Punteggi:",
      ""
    );
    attacca(
      "boxpunteggio",
      "idpunteggio",
      ["classifica", "boxbordato"],
      "<table id='idtable'></table>",
      ""
    );
    attacca("divazzera", "idschermatafinale", ["punteggio", "titolo"], "", "");
    attacca(
      "idazzera",
      "divazzera",
      ["btn", "btnazzera"],
      "Azzera Punteggi!",
      "azzerapunteggi()"
    );
    if (arraypunteggio.length > 0) {
      arraypunteggio.sort(compare);
      console.log(arraypunteggio);
      arraypunteggio.map(
        (item, index) => (
          attaccaX("idriga" + index, "idtable", ["tra"], "", "", "tr"),
          attaccaX(
            "idnome" + index,
            "idriga" + index,
            ["tda", "classifica"],
            item.nome,
            "",
            "td"
          ),
          attaccaX(
            "idpunteggio" + index,
            "idriga" + index,
            ["tda", "classifica"],
            item.punteggio,
            "",
            "td"
          )
        )
      );
    }
  }

  //FUNZIONE CHE CI PERMETTE DI ATTACCARE UN DIV AD UN ALTRO
  function attacca(idDaAttaccare, idDestinazione, css, testo, suclick) {
    let divDaAttaccare = document.createElement("div");
    css.map((item, index) => divDaAttaccare.classList.add(item));
    divDaAttaccare.setAttribute("id", idDaAttaccare);
    if (suclick) {
      divDaAttaccare.setAttribute("onClick", suclick);
    }
    let boxacuiattaccare = document.getElementById(idDestinazione);
    boxacuiattaccare.appendChild(divDaAttaccare);
    let divDaAttaccareI = document.getElementById(idDaAttaccare);
    divDaAttaccareI.innerHTML += testo;
  }
  //permette di attaccare elementi diversi dai div
  function attaccaX(idDaAttaccare, idDestinazione, css, testo, suclick, tipo) {
    let divDaAttaccare = document.createElement(tipo);
    css.map((item, index) => divDaAttaccare.classList.add(item));
    divDaAttaccare.setAttribute("id", idDaAttaccare);
    if (suclick) {
      divDaAttaccare.setAttribute("onClick", suclick);
    }
    let boxacuiattaccare = document.getElementById(idDestinazione);
    boxacuiattaccare.appendChild(divDaAttaccare);
    let divDaAttaccareI = document.getElementById(idDaAttaccare);
    divDaAttaccareI.innerHTML += testo;
  }

  // FUNZIONE CHE CI PERMETTE DI ORDINARE UN ARRAY DI OGGETTI DAL PIU GRANDE AL PIU PICCOLO SE SI VUOLE L ORDINE CONTRARIO INVERTIRE I SEGNI
  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const scoreA = a.punteggio;
    const scoreB = b.punteggio;

    let comparison = 0;
    if (scoreA < scoreB) {
      comparison = 1;
    } else if (scoreA > scoreB) {
      comparison = -1;
    }
    return comparison;
  }
});
