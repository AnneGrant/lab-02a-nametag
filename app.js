const myName = document.getElementById('name-output');
const myInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');
const pinkButton = document.getElementById('pink-button');
const greenButton = document.getElementById('green-button');
const blueButton = document.getElementById('blue-button');

nameButton.addEventListener('click', () => {
    const userInput = myInput.value;

    myName.textContent = userInput;
});

pinkButton.addEventListener('click', () => {
    document.body.style.background = "pink"
});

greenButton.addEventListener('click', () => {
    document.body.style.background = "lightgreen"
});

blueButton.addEventListener('click', () => {
    document.body.style.background = "lightblue"
});