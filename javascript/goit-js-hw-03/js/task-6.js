export function task6() {
    function calculateTotalPrice(arr, productName) {
        for (const i of arr) {
            if (i.name === productName) {
                return `${i.name} ${i.quantity}шт стоит: ${i.price *
                    i.quantity}грн`;
            }
        }
    }

    const products = [
        { name: "Радар", price: 1300, quantity: 4 },
        { name: "Сканер", price: 2700, quantity: 3 },
        { name: "Дроид", price: 400, quantity: 7 },
        { name: "Захват", price: 1200, quantity: 2 }
    ];

    console.log(calculateTotalPrice(products, "Радар")); // 5200

    console.log(calculateTotalPrice(products, "Дроид")); // 2800
}
