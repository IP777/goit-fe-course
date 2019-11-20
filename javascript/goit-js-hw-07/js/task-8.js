const input = document.querySelector("#controls>input");
const renderBtn = document.querySelector("[data-action=render]");
const destroyBtn = document.querySelector("[data-action=destroy]");
const divContainer = document.getElementById("boxes");

renderBtn.onclick = function() {
	createBoxes(input.value);
};

destroyBtn.onclick = function() {
	document.querySelector(".container_box").remove();
	//document.querySelectorAll(".color_box").forEach(el => el.remove());
};

const createBoxes = amount => {
	let size = 30;
	const container = document.createElement("div");
	container.classList.add("container_box");

	for (let i = 0; i < amount; i++) {
		container.appendChild(createDivElement(size));
		size += 10;
	}
	divContainer.append(container);
};

const mathNum = () => Math.floor(Math.random() * 255);

const createDivElement = size => {
	const newDiv = document.createElement("div");
	newDiv.classList.add("color_box");
	newDiv.style.margin = 10 + "px";
	newDiv.style.backgroundColor =
		"rgb(" + mathNum() + "," + mathNum() + "," + mathNum() + ")";
	newDiv.style.width = size + "px";
	newDiv.style.height = size + "px";
	return newDiv;
};
