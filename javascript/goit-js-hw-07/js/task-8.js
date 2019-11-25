const input = document.querySelector("#controls>input");
const renderBtn = document.querySelector("[data-action=render]");
const destroyBtn = document.querySelector("[data-action=destroy]");
const divContainer = document.getElementById("boxes");
const container = document.createDocumentFragment();

renderBtn.onclick = function() {
	createBoxes(input.value);
};

destroyBtn.onclick = function() {
	document.querySelectorAll(".color_box").forEach(el => el.remove());
};

const createBoxes = amount => {
	Array(parseInt(amount))
		.fill("")
		.forEach((element, index) => {
			container.appendChild(createDivElement(index * 10));
		});
	divContainer.append(container);
};

const createDivElement = size => {
	const newDiv = document.createElement("div");
	newDiv.classList.add("color_box");
	newDiv.style.margin = 10 + "px";
	newDiv.style.backgroundColor =
		"rgb(" + mathNum() + "," + mathNum() + "," + mathNum() + ")";
	newDiv.style.width = 30 + size + "px";
	newDiv.style.height = 30 + size + "px";
	return newDiv;
};

const mathNum = () => Math.floor(Math.random() * 255);
