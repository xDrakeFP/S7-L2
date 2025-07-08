const ultimo = document.getElementById("ultimo");
const invia = document.getElementById("invia");
const rimuovi = document.getElementById("rimuovi");
const testo = document.getElementById("name");
const memoryKey = "testo-salvato";

invia.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Salvo");
  const testoArchiviazione = testo.value;
  ultimo.textContent = testoArchiviazione;
  console.log(testoArchiviazione, ultimo);
  localStorage.setItem(memoryKey, testoArchiviazione);

  alert("Nome registrato!");
});

rimuovi.addEventListener("click", function () {
  console.log("Rimuovo");
  testo.value = "";
  ultimo.textContent = "";
  localStorage.removeItem(memoryKey);
  alert("Nome rimosso!");
});
