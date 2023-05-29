// definizione di un array per memorizzare gli iscritti
var iscritti = [];

// funzione per aggiungere un nuovo iscritto all'array
function aggiungiIscritto() {
  // leggi i dati del modulo
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;
  var dataNascita = document.getElementById("dataNascita").value;
  var sport = document.getElementById("sport").value;
  
  // aggiungi l'iscritto all'array
  var nuovoIscritto = {
    nome: nome,
    cognome: cognome,
    dataNascita: dataNascita,
    sport: sport
  };
  iscritti.push(nuovoIscritto);
  
  // aggiorna la lista degli iscritti
  var elenco = document.getElementById("elencoIscritti");
  var elencoHtml = "";
  for (var i = 0; i < iscritti.length; i++) {
    var iscritto = iscritti[i];
    elencoHtml += "<li>" + iscritto.nome + " " + iscritto.cognome + ", " + iscritto.dataNascita + ", " + iscritto.sport + "</li>";
  }
  elenco.innerHTML = elencoHtml;
}


// cookies

document.addEventListener("DOMContentLoaded", function() {
  var popup = document.getElementById("cookie-popup");
  var overlay = document.getElementById("cookie-overlay");
  var acceptButton = document.getElementById("accept-cookies");
  var rejectButton = document.getElementById("reject-cookies");
  var learnMoreLink = document.getElementById("learn-more");

  function hidePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
    document.body.classList.remove("blur");
  }

  function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    hidePopup();
  }

  function rejectCookies() {
    localStorage.setItem("cookiesAccepted", "false");
    hidePopup();
    // Esegui altre azioni per gestire il rifiuto dei cookie
  }

  function openLearnMore() {
    // Esegui azioni per mostrare ulteriori informazioni sui cookie
  }

  acceptButton.addEventListener("click", acceptCookies);
  rejectButton.addEventListener("click", rejectCookies);
  learnMoreLink.addEventListener("click", openLearnMore);

  var cookiesAccepted = localStorage.getItem("cookiesAccepted");
  if (cookiesAccepted === "true") {
    hidePopup();
  } else {
    popup.style.display = "block";
    overlay.style.display = "block";
    document.body.classList.add("blur");
  }
});

