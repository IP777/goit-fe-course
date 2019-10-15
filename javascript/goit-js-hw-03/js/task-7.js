export function task7() {
    const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
    //let login = prompt('Введите login');

    const isLoginValid = function(login) {
        return login.length >= 4 && login.length <= 16;
    };

    const isLoginUnique = function(allLogins, login) {
        return allLogins.includes(login);
    };

    const addLogin = function(allLogins, login) {
        if (isLoginValid(login) && !isLoginUnique(allLogins, login)) {
            return console.log(`Логин "${login}" успешно добавлен!`);
        } else if (isLoginValid(login)) {
            return console.log("Такой логин уже используется!");
        } else {
            return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
        }
    };

    addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
    addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
    addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
    addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
}
