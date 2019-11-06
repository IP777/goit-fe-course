function task7() {
    //Получить общую сумму баланса (поле balance) всех пользователей.

    const calculateTotalBalance = (users) => {
        return users.reduce((acc, value) => {
            //console.log(value.balance + ` +`);
            return acc + value.balance;
        }, 0);
    };

    console.log(calculateTotalBalance(users)); // 20916
}
