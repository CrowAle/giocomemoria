function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR has 'withCredentials' property only if it supports CORS
    xhr.open(method, url, true);
    console.log(1);
  } else if (typeof XDomainRequest != "undefined") {
    // if IE use XDR
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}

function inviapunteggiodb(utente, punteggio) {
  var request = createCORSRequest(
    "POST",
    "https://memogame.altervista.org/servermemogame/server.php"
  );
  if (request) {
    request.onload = function () {};
    let data = { nome: utente, punteggio: punteggio };
    request.send(JSON.stringify(data));
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log("dati inviati" + request.responseText);
      }
    };
  }
}
async function get_class_assolutas() {
  var request = createCORSRequest(
    "get",
    "https://memogame.altervista.org/servermemogame/server.php?mode=listaclassifica"
  );
  if (request) {
    // Define a callback function
    request.onload = function () {};
    // Send request
    request.send();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var punteggio = JSON.parse(request.responseText);

        //console.log("qui", JSON.stringify(punteggio));
        return punteggio;
      }
    };
  }
}
