function task2() {
    //Получить массив объектов пользователей по цвету глаз (поле eyeColor).
    const getUsersWithEyeColor = (users, color) => {
        return users.filter((user) => user.eyeColor === color);
    };

    console.table(getUsersWithEyeColor(users, "blue"), ["name", "eyeColor"]); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
}
