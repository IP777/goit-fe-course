const menu = document.querySelector("#menu");

class Menu {
    constructor(elem) {
        //this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    save() {
        alert("сохранено");
    }

    load() {
        alert("загружено");
    }

    search() {
        alert("найдено");
    }

    clear() {
        alert("почистили");
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}

new Menu(menu);
