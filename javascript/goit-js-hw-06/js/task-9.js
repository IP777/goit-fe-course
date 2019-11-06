function task9() {
    //Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

    const getNamesSortedByFriendsCount = (users) => {
        //Копирую масив чтоб не изменять оригинал
        const copyUsers = [...users];

        const sortByFriendsAmount = (a, b) =>
            a.friends.length > b.friends.length;
        const sortObjArr = copyUsers.sort(sortByFriendsAmount);
        const mapUserName = sortObjArr.map((user) => user.name);
        return mapUserName;
        //Краткая запись
        // return (copyUsers = [...users]
        //     .sort((a, b) => a.friends.length > b.friends.length)
        //     .map((user) => user.name));
    };

    console.log(getNamesSortedByFriendsCount(users));
    // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
}
