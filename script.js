const container = document.querySelector(".container");
const title = document.querySelector(".title");
const inputNumber = document.querySelector(".inputNumber");
const button = document.querySelector(".button");
const text = document.querySelector(".text");
const resetButton = document.querySelector(".resetButton");
window.onload = () => {
  inputNumber.focus();
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  const firstThree = Number(inputNumber.value.slice(0, 3));
  const midTwo = Number(inputNumber.value.slice(4, 6));
  const lastFour = Number(inputNumber.value.slice(7));
  if (inputNumber.value.length !== 11) {
    text.textContent = "The SSN must consist of 11 digits";
    text.style.backgroundColor = "white";
    text.style.color = "red";
    inputNumber.value = "";
  } else if (inputNumber.value[3] !== "-" || inputNumber.value[6] !== "-") {
    text.textContent = "Incorrect Entry";
    text.style.backgroundColor = "white";
    ext.style.color = "red";
    inputNumber.value = "";
  } else if (firstThree === 0 || firstThree === 666 || firstThree >= 900) {
    text.textContent = "The first three digits are incorrect";
    text.style.backgroundColor = "white";
    ext.style.color = "red";
    inputNumber.value = "";
  } else if (midTwo === 0) {
    text.textContent = "The 4th and 5th digits are incorrect";
    text.style.backgroundColor = "white";
    ext.style.color = "red";
    inputNumber.value = "";
  } else if (lastFour === 0) {
    text.textContent = "The last four digits are incorrect";
    text.style.backgroundColor = "white";
    ext.style.color = "red";
    inputNumber.value = "";
  } else {
    text.textContent = `Successful Entry: ${inputNumber.value}`;
    text.style.backgroundColor = "white";
    text.style.color = "green";
    inputNumber.value = "";
    inputNumber.disabled = true;
  }
});

resetButton.addEventListener("click", () => {
  text.textContent = "";
  text.style.color = "black";
  inputNumber.disabled = false;
});
