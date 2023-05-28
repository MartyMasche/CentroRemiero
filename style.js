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




window.addEventListener('DOMContentLoaded', function() {
  var cookiePopup = document.getElementById('cookiePopup');
  var acceptButton = document.getElementById('acceptButton');
  var rejectButton = document.getElementById('rejectButton');
  var siteContent = document.getElementById('siteContent');

  acceptButton.addEventListener('click', function() {
    cookiePopup.style.display = 'none';
    siteContent.style.display = 'block';
    // Esegui azioni per accettare i cookie...
  });

  rejectButton.addEventListener('click', function() {
    if (!siteContent.style.display || siteContent.style.display === 'none') {
      window.location.href = 'pagina_di_rifiuto_cookie.html';
    } else {
      cookiePopup.style.display = 'none';
      // Esegui azioni per rifiutare i cookie...
    }
  });
});
