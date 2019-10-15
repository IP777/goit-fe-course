export function task4() {
    function countTotalSalary(employees) {
        const values = Object.values(employees);
        let sum = 0;

        for (let i = 0; i < values.length; i++) {
            sum += values[i];
        }

        return sum;
    }

    console.log(countTotalSalary({})); // 0

    console.log(
        countTotalSalary({
            mango: 100,
            poly: 150,
            alfred: 80
        })
    ); // 330

    console.log(
        countTotalSalary({
            kiwi: 200,
            lux: 50,
            chelsy: 150
        })
    ); // 400
}
