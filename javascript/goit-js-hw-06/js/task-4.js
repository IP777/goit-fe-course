function task4() {
    //Получить массив только неактивных пользователей (поле isActive).

    const getInactiveUsers = (users) => {
        return users.filter((user) => !user.isActive);
    };

    console.table(getInactiveUsers(users), ["name", "isActive"]); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
}
