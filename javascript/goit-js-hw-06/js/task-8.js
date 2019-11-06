function task8() {
    //Массив имен всех пользователей у которых есть друг с указанным именем.

    const getUsersWithFriend = (users, friendName) =>
        users.reduce((allFriends, user) => {
            if (user.friends.some((friend) => friend === friendName)) {
                allFriends.push(user.name);
            }

            return allFriends;
        }, []);

    console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
    console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
}
