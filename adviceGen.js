async function homeAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let advice = await response.json();
  let showAdvice = document.getElementById("advice");
  showAdvice.textContent = advice.slip.advice;
}
homeAdvice();

async function newAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let advice = await response.json();
  let showAdvice = document.getElementById("advice");
  showAdvice.textContent = advice.slip.advice;
}
