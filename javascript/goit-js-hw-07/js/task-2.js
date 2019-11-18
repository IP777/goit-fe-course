export function task2() {
    const ingredients = [
        "Картошка",
        "Грибы",
        "Чеснок",
        "Помидоры",
        "Зелень",
        "Приправы"
    ];

    const addNewElement = textArr => {
        const selectList = document.querySelector("#ingredients");
        const container = document.createElement("div");
        container.classList.add("container");
        textArr.forEach(text => container.appendChild(createItemElement(text)));
        selectList.append(container);
    };

    const createItemElement = text => {
        const newLi = document.createElement("li");
        newLi.textContent = text;
        return newLi;
    };

    addNewElement(ingredients);
}
