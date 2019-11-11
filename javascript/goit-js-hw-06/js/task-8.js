function task8() {
    //Массив имен всех пользователей у которых есть друг с указанным именем.

    //Императивная запись=============================================
    // const getUsersWithFriend = (users, friendName) =>
    //     users.reduce((allFriends, user) => {
    //         if (user.friends.some((friend) => friend === friendName)) {
    //             allFriends.push(user.name);
    //         }

    //         return allFriends;
    //     }, []);

    const getUsersWithFriend = (users, friendName) =>
        users
            .filter(user => user.friends.includes(friendName))
            .map(user => user.name);

    console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
    console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
}
