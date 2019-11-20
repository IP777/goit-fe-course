import { ingredients } from "./data-base.js";

const selectList = document.querySelector("#ingredients");

const addNewElement = textArr => {
	const container = document.createElement("div");
	container.classList.add("container");

	textArr.forEach(text => selectList.appendChild(createItemElement(text)));
	selectList.append(container);
};

const createItemElement = text => {
	const newLi = document.createElement("li");
	newLi.textContent = text;
	return newLi;
};

addNewElement(ingredients);
