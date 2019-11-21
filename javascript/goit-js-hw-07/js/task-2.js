import { ingredients } from "./data-base.js";

const selectList = document.querySelector("#ingredients");
const container = document.createDocumentFragment();

const addNewElement = textArr => {
	textArr.forEach(text => container.appendChild(createItemElement(text)));
	selectList.append(container);
};

const createItemElement = text => {
	const newLi = document.createElement("li");
	newLi.textContent = text;
	return newLi;
};

addNewElement(ingredients);
