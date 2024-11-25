// const btnElement = document.querySelector("button");
// const nameElement = document.querySelector("span");

// btnElement.addEventListener("click", () => {
//   const yourName = prompt("Please enter your name");
//   nameElement.textContent = yourName;
// });
const btnElement = document.querySelector("button");
const nameElement = document.querySelector("span");

btnElement.addEventListener("click", () => {
  const yourName = prompt("Please enter your name");
  if (yourName !== null && yourName.trim() !== "") {
    nameElement.textContent = yourName;
  } else {
    nameElement.textContent = "No name entered";
  }
});
