function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function azzerapunteggi() {
  setCookie("coockiememoria", "", 7);
}
function aggiungipunteggiocoockie(utente, punteggio) {
  nuovo = utente + ":" + punteggio + ",";
  console.log(nuovo);
  setCookie("coockiememoria", getCookieName("coockiememoria") + nuovo, 7);

  console.log("biscottino", getCookie("coockiememoria"));
}
// funzioni che ci permette di settare un COOKIE
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
