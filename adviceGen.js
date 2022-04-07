// Fonction qui affiche un conseil au chargement de la page//
async function homeAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let advice = await response.json();
  let showAdvice = document.getElementById("advice");
  showAdvice.textContent = '"' + advice.slip.advice + '"';
}
homeAdvice();

// Fonction qui affiche un conseil au clique du bouton green-circle//
async function newAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let advice = await response.json();
  let showAdvice = document.getElementById("advice");
  showAdvice.textContent = '"' + advice.slip.advice + '"';
}
