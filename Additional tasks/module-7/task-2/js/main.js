// const menu = document.querySelector("#menu");

// class Menu {
//     constructor(elem) {
//         elem.onclick = this.onClick.bind(this);
//     }

//     save() {
//         alert("сохранено");
//     }

//     load() {
//         alert("загружено");
//     }

//     search() {
//         alert("найдено");
//     }

//     clear() {
//         alert("почистили");
//     }

//     onClick(event) {
//         let action = event.target.dataset.action;
//         if (action) {
//             this[action]();
//         }
//     }
// }

// new Menu(menu);
const area = document.querySelector("#area");

const heandlerClick = e => {
    const target = e.target;

    if (target.dataset.action === "on_off") {
        area.hidden = !area.hidden;
    }
};

document.addEventListener("click", heandlerClick);
