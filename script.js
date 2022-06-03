const diceButton = document.getElementById("dice");
const adviceId = document.getElementById("id");
const quotePlaceholder = document.getElementById("quote");

const fetchData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceId.innerText = data.slip.id;
      quotePlaceholder.innerText = data.slip.advice;
    });
};

//we call fetchData function on two occasions : 1-when page reloads and 2- when we click on dice
window.onload = function () {
  fetchData();
};
diceButton.addEventListener("click", fetchData);
