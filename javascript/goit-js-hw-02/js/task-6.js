export function task6() {
    "user strict";
    let input;
    const numbers = [];
    let total = 0;
    let choiсe;

    while (true) {
        input = prompt("Введите произвольное число:");
        input = Number(input);
        if (!Number.isNaN(input) && input != 0) {
            numbers.push(Number.parseInt(input));
        } else if (Number.isNaN(input)) {
            choiсe = confirm(`Вы ввели неправильное число. Продолжить?`);
            if (!choiсe) {
                break;
            }
        } else {
            for (let i = 0; i < numbers.length; i++) {
                total += numbers[i];
            }
            alert(`Общая сумма чисел равна = ${total}`);
            break;
        }
    }
}
