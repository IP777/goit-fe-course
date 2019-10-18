export function task3() {
    //Вариант 1 в 4тыре цикла
    function findBestEmployee(employees) {
        const keys = Object.keys(employees);
        const values = Object.values(employees);
        const maxValue = Math.max(...values);

        return keys[values.indexOf(maxValue)];
    }

    //Вариант 2 в 2ва цикла
    function findBestEmployee(employees) {
        employees = Object.entries(employees);
        let max = employees[0][1];
        let employeesName = employees[0][0];
        for (let i = 0; i < employees.length; i++) {
            if (employees[i][1] > max) {
                max = employees[i][1];
                employeesName = employees[i][0];
            }
        }
        return employeesName;
    }

    console.log(
        findBestEmployee({
            ann: 29,
            david: 35,
            helen: 1,
            lorence: 99
        })
    ); // lorence

    console.log(
        findBestEmployee({
            poly: 12,
            mango: 17,
            ajax: 4
        })
    ); // mango

    console.log(
        findBestEmployee({
            lux: 147,
            david: 21,
            kiwi: 19,
            chelsy: 38
        })
    ); // lux
}
