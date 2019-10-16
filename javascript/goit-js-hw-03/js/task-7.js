export function task7() {
    /*Напиши скрипт управления личным кабинетом интернет банка.
    Есть объект account в котором необходимо реализовать методы для работы с 
    балансом и историей транзакций.*/

    /*
     * Типов транзацкий всего два.
     * Можно положить либо снять деньги со счета.
     */
    const Transaction = {
        DEPOSIT: "deposit",
        WITHDRAW: "withdraw"
    };

    /*
     * Каждая транзакция это объект со свойствами: id, type и amount
     */

    const account = {
        // Текущий баланс счета
        balance: 0,

        // История транзакций
        transactions: [],

        /*
         * Метод отвечающий за добавление суммы к балансу
         * Создает объект транзакции и вызывает addTransaction
         */
        deposit(amount) {
            this.balance += amount;
            this.addTransaction({
                id: Math.floor(Math.random() * 100),
                type: Transaction.DEPOSIT,
                amount: this.balance
            });
        },

        /*
         * Метод отвечающий за снятие суммы с баланса.
         * Создает объект транзакции и вызывает addTransaction
         *
         * Если amount больше чем текущий баланс, выводи сообщение
         * о том, что снятие такой суммы не возможно, недостаточно средств.
         */
        withdraw(amount) {
            if (this.balance > amount) {
                this.balance -= amount;
                this.addTransaction({
                    id: Math.floor(Math.random() * 100),
                    type: Transaction.DEPOSIT,
                    amount: this.balance
                });
            } else {
                console.log(
                    `Снятие суммы ${amount} невозможно недостаточно средств!`
                );
            }
        },

        /*
         * Метод добавляющий транзацию в свойство transactions
         * Принимает объект трназкции
         */
        addTransaction(transaction) {
            this.transactions.push(transaction);
            console.log(this.transactions);
        },

        /*
         * Метод возвращает текущий баланс
         */
        getBalance() {
            return this.balance;
        },

        /*
         * Метод ищет и возвращает объект транзации по id
         */
        getTransactionDetails(id) {},

        /*
         * Метод возвращает количество средств
         * определенного типа транзакции из всей истории транзакций
         */
        getTransactionTotal(type) {}
    };

    account.deposit(200);
    account.deposit(400);
    account.withdraw(300);
    console.log(account.getBalance());
}
