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




$(document).ready(function() {
	// Controlla se il cookie "cookie_consent" esiste
	if (getCookie("cookie_consent") === "") {
		// Se il cookie non esiste, mostra il popup
		$(".cookie-popup").show();
	}

	// Aggiungi l'evento al pulsante "Accetta"
	$(".cookie-accept").click(function() {
		// Imposta il cookie "cookie_consent" con la data di scadenza a un anno
		setCookie("cookie_consent", "true", 365);
		// Nascondi il popup
		$(".cookie-popup").hide();
	});

	// Aggiungi l'evento al pulsante "Declina"
	$(".cookie-decline").click(function() {
		// Imposta il cookie "cookie_consent" con la data di scadenza a un giorno
		setCookie("cookie_consent", "false", 1);
		// Nascondi il popup
		$(".cookie-popup").hide();
	});

	// Funzione per impostare un cookie
	function setCookie(name, value, days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
	}

	// Funzione per ottenere il valore di un cookie
	function getCookie(name) {
		var nameEQ