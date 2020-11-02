// CREO UN COOKIE E LO SETTO CON NOME VALORE E EXPIRES
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
// RICAVO IL VALORE DEL  COOKIE TRASFORMANDOLO IN JSON usando la funzione getCookieName(name)
function getCookie(name) {
  //let a = document.cookie.split("=")[1];
  let a = getCookieName(name);
  let b = a.split(",");
  let punti = [];
  b.forEach((element) => {
    let c = element.split(":");
    if (c[0]) {
      punti.push({ nome: c[0], punteggio: parseInt(c[1]) });
    }
  });
  return punti;
}
//RITORNA IL VALORE DEL COOKIE
function getCookieName(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
//*******************      OPERAZIONI SU COOKIE PUNTEGGIO ******************************
function azzerapunteggi() {
  let azzera = confirm("Vuoi Veramente azzerare i punteggi?");
  azzera && setCookie("coockiememoria", "", 7);
}

function aggiungipunteggiocoockie(utente, punteggio) {
  nuovo = utente + ":" + punteggio + ",";
  //console.log(nuovo);
  setCookie("coockiememoria", getCookieName("coockiememoria") + nuovo, 7);
}
//******************* FINE     OPERAZIONI SU COOKIE PUNTEGGIO ******************************

// funzione solo di backtest
function loggacookie() {
  //setCookie("nomexgenerale", "torino", 100);
  console.log(getCookieName("coockiememoria"));
  console.log(getCookie("coockiememoria"));
  console.log(document.cookie);
  console.log(getCookieName("nomexgenerale"));
}
