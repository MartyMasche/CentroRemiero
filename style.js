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


