const keyInizio = "Inizio Sessione";

window.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem(keyInizio)) {
    sessionStorage.setItem(keyInizio, Date.now());
  }

  setInterval(function () {
    const inizio = parseInt(sessionStorage.getItem(keyInizio));
    const adesso = Date.now();

    const secondiPassati = Math.floor((adesso - inizio) / 1000);
    const testo = document.getElementById("timer");
    testo.textContent = secondiPassati;
  }, 1000);
});
