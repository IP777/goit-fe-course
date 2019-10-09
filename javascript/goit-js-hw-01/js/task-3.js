export function task3(){
    const ADMIN_PASSWORD = 'jqueryismyjam';

    const pass = prompt('Введите пароль: jqueryismyjam');

    if(pass === ADMIN_PASSWORD){
        alert('Добро пожаловать!');
    }else{
        alert('Доступ запрещен, неверный пароль!');
    }
}