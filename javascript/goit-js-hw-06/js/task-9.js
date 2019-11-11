function task9() {
    //Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

    //Императивная запись=============================================
    // const getNamesSortedByFriendsCount = users => {
    //     //Копирую масив чтоб не изменять оригинал
    //     // const copyUsers = [...users];

    //     // const sortByFriendsAmount = (a, b) =>
    //     //     a.friends.length > b.friends.length;
    //     // const sortObjArr = copyUsers.sort(sortByFriendsAmount);
    //     // const mapUserName = sortObjArr.map((user) => user.name);
    //     // return mapUserName;
    // };

    //Декларативная запись=============================================
    //1вый способ
    // const getNamesSortedByFriendsCount = users =>
    //     [...users]
    //         .sort((a, b) => a.friends.length > b.friends.length)
    //         .map((user) => user.name);

    //2рой способ
    const getNamesSortedByFriendsCount = users =>
        users
            .map(({ name, friends }) => ({ name, friends: friends.length }))
            .sort((a, b) => a.friends.length - b.friends.length)
            .map(user => user.name);

    console.log(getNamesSortedByFriendsCount(users));
    // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
}
