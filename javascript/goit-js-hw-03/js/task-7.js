export function task7() {
    const Transaction = {
        DEPOSIT: 'deposit',
        WITHDRAW: 'withdraw'
    };

    const account = {
        balance: 0,
        transactions: [],
        amountArr: [],

        deposit(amount) {
            this.balance += amount;
            this.addTransaction({
                id: this.transactions.length,
                type: Transaction.DEPOSIT,
                amount: this.balance
            });
        },

        withdraw(amount) {
            if (this.balance > amount) {
                this.balance -= amount;
                this.addTransaction({
                    id: this.transactions.length,
                    type: Transaction.WITHDRAW,
                    amount: this.balance
                });
            } else {
                console.log(
                    `Снятие суммы ${amount} невозможно недостаточно средств!`
                );
            }
        },

        addTransaction(transaction) {
            this.transactions.push(transaction);
        },

        getBalance() {
            return this.balance;
        },

        getTransactionDetails(id) {
            for (const i of this.transactions) {
                if (i.id === id) {
                    return i;
                }
            }
        },

        getTransactionTotal(type) {
            for (const i of this.transactions) {
                if (i.type === type) {
                    this.amountArr.push(i.amount);
                    //return i.amount;
                }
            }
            return this.amountArr;
        }
    };

    //Проверки
    account.deposit(200);
    account.deposit(400);
    account.withdraw(300);
    console.log(`Текущий баланс = ${account.getBalance()}`);
    //Выборка по id
    console.log(account.getTransactionDetails(2));
    console.log(
        `Выюорка транзакций по типу ${account.getTransactionTotal(
            Transaction.DEPOSIT
        )}`
    );
    //Ошибка менше средств нежели сумма на счету
    account.withdraw(700);
}
