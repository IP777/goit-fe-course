const selectDom = document.querySelector("#categories");
const selectLiItem = selectDom.querySelectorAll(".item");

console.log(`В списке: ${selectLiItem.length} категории`);

selectLiItem.forEach(item =>
	console.log(`
        Категория: ${item.firstElementChild.textContent}
        Количество элементов: ${item.lastElementChild.children.length}
        `)
);
