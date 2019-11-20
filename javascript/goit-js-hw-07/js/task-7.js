const rollerInput = document.getElementById("font-size-control");
const textOutput = document.querySelector("span#text");

rollerInput.oninput = function() {
	textOutput.style.fontSize = `${this.value}px`;
	textOutput.innerHTML = this.value;
};
