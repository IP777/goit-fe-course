export function task3() {
    class Storage {
        constructor(items) {
            this.items = items;
        }

        getItems() {
            return `items: ${this.items}`;
        }

        addItem(addItm) {
            return this.items.push(addItm);
        }
        removeItem(removeItm) {
            return this.items.splice(this.items.indexOf(removeItm), 1);
        }
    }

    const storage = new Storage([
        "Нанитоиды",
        "Пролонгер",
        "Железные жупи",
        "Антигравитатор"
    ]);

    const items = storage.getItems();
    console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

    storage.addItem("Дроид");
    console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

    storage.removeItem("Пролонгер");
    console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
}
