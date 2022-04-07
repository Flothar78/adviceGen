// Fonction qui affiche un conseil au chargement de la page//
async function homeAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let advice = await response.json();
  let showAdvice = document.getElementById("advice");
  showAdvice.textContent = '"' + advice.slip.advice + '"';

  // Ajout, dans la balise title, du Id récupéré via le JSON  //
  let showId = document.getElementById("title");
  showId.textContent = "ADVICE # " + advice.slip.id;
}
homeAdvice();

// Fonction qui affiche un conseil au clique du bouton green-circle//
async function newAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let advice = await response.json();
  let showAdvice = document.getElementById("advice");
  showAdvice.textContent = '"' + advice.slip.advice + '"';

  // Ajout, dans la balise title, du Id récupéré via le JSON  //
  let showId = document.getElementById("title");
  showId.textContent = "ADVICE # " + advice.slip.id;
}
