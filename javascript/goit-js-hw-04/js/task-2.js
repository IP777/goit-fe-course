export function task2() {
    const inventory = {
        items: ["Монорельса", "Фильтр"],
        add(itemName) {
            console.log(`Adding ${itemName} to inventory`);

            //Так как this в в контексте callback функции недоступна,
            //обратился непосредственно к обьекту.
            inventory.items.push(itemName);
        },
        remove(itemName) {
            console.log(`Removing ${itemName} from inventory`);

            //Так как this в в контексте callback функции недоступна,
            //обратился непосредственно к обьекту.
            inventory.items = inventory.items.filter(
                (item) => item !== itemName
            );
        }
    };

    const invokeInventoryAction = function(itemName, action) {
        console.log(`Invoking action on ${itemName}`);
        action(itemName);
    };

    invokeInventoryAction("Аптечка", inventory.add);
    // Invoking action on Аптечка
    // Adding Аптечка to inventory

    console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

    invokeInventoryAction("Фильтр", inventory.remove);
    // Invoking action on Фильтр
    // Removing Фильтр from inventory

    console.log(inventory.items); // ['Монорельса', 'Аптечка']
}
