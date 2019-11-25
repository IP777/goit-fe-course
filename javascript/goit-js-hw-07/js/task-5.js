const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.oninput = () =>
	textInput.value !== ""
		? (textOutput.innerHTML = textInput.value)
		: (textOutput.innerHTML = "незнакомец");

// const refs = {
// 	userInput: document.querySelector("#name-input"),
// 	output: document.querySelector("#name-output")
// };

// refs.userInput.addEventListener("input", () => {
// 	refs.output.textContent = refs.userInput.value || "незнакомец";
// });
