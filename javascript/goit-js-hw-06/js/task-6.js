function task6() {
    //Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

    const getUsersWithAge = (users, min, max) => {
        return users.filter((user) => user.age > min && user.age < max);
    };

    console.table(getUsersWithAge(users, 20, 30), ["name", "age"]); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

    console.table(getUsersWithAge(users, 30, 40), ["name", "age"]);
    // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
}
