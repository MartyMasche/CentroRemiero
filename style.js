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




function setCookie(name, value, days) {
	var expires = "";
	if (days) {
	  var date = new Date();
	  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	  expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(";");
	for (var i = 0; i < ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == " ") c = c.substring(1, c.length);
	  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
  }
  
  function acceptCookies() {
	setCookie("cookiePopupShown", "true", 7);
	document.getElementById("cookiePopup").style.display = "none";
  }
  
  function rejectCookies() {
	setCookie("cookiePopupShown", "false", 7);
	document.getElementById("cookiePopup").style.display = "none";
  }
  
  window.onload = function () {
	if (getCookie("cookiePopupShown") !== "true") {
	  document.getElementById("cookiePopup").style.display = "block";
	}
	document.getElementById("cookieLink").addEventListener("click", function (e) {
	  e.preventDefault();
	  // Inserire qui il link alla pagina di informazioni sui cookie
	  alert("Pagina di informazioni sui cookie non disponibile.");
	});
  };