const validInput = document.querySelector("#validation-input");
validInput.classList.add("def");

// validInput.onblur = function() {
// 	if (this.value.length >= this.dataset.length) {
// 		this.classList.remove("invalid");
// 		this.classList.add("valid");
// 	} else {
// 		this.classList.remove("valid");
// 		this.classList.add("invalid");
// 	}
// };
validInput.onchange = function() {
	this.value.length >= this.dataset.length
		? this.classList.replace(this.getAttribute("class"), "valid")
		: this.classList.replace(this.getAttribute("class"), "invalid");
};
