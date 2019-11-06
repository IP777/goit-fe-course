function task3() {
    //Получить массив имен пользователей по полу (поле gender).

    const getUsersWithGender = (users, gender) => {
        const sortingForGender = users.filter((user) => {
            return user.gender === gender;
        });
        const sortingForName = sortingForGender.map((user) => {
            return user.name;
        });
        return sortingForName;
        //Краткая запись
        // return users
        //     .filter((user) => user.gender === gender)
        //     .map((user) => user.name);
    };

    console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
}
