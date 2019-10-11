export function task2() {
    const total = 100;
    const ordered = 50;
    let ordereds = [20, 50, 80, 130];

    console.log(`Количество товаров на складе ${total}.`);
    console.log(`Заказали ${ordered}`);

    if (total < ordered) {
        console.log(`Количество товаров на складе недостаточно`);
    } else {
        console.log(`Заказ оформлен, с вами свяжется менеджер`);
    }

    for (let i = 0; i < ordereds.length; i++) {
        console.log(`Заказали ${ordereds[i]}`);
        if (total < ordereds[i]) {
            console.log(`Количество товаров на складе недостаточно`);
        } else {
            console.log(`Заказ оформлен, с вами свяжется менеджер`);
        }
    }
}
