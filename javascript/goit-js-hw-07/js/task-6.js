const validInput = document.querySelector("#validation-input");
validInput.classList.add("def");

validInput.onchange = function() {
	this.value.length >= this.dataset.length
		? this.classList.replace(this.getAttribute("class"), "valid")
		: this.classList.replace(this.getAttribute("class"), "invalid");
};
