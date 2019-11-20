const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.oninput = () =>
	textInput.value !== ""
		? (textOutput.innerHTML = textInput.value)
		: (textOutput.innerHTML = "незнакомец");
