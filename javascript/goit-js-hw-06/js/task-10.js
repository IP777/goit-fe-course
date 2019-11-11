function task10() {
    //Получить массив всех умений всех пользователей (поле skills),
    //при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

    //Императивная запись=============================================
    // const getSortedUniqueSkills = users => {
    //     const reducedUser = users.reduce((acc, value) => {
    //         if (!acc.includes(value)) {
    //             acc.push(...value.skills);
    //             //console.log(acc);
    //         }

    //         return acc;
    //     }, []);

    //     const sortByFirstLetter = reducedUser.sort();

    //     return sortByFirstLetter;
    // };

    //Декларативная запись=============================================
    //1вый способ
    // const getSortedUniqueSkills = users =>
    //     [...users]
    //         .reduce((acc, value) => {
    //             if (!acc.includes(value)) {
    //                 acc.push(...value.skills);
    //             }
    //             return acc;
    //         }, [])
    //         .sort();

    //2рой способ
    const getSortedUniqueSkills = users =>
        users
            .map(user => user.skills)
            .reduce((acc, value) => [...acc, ...value], [])
            .sort();

    console.log(getSortedUniqueSkills(users));
    // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
}
