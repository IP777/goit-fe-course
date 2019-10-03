export function task4(){
    const credits = 23580;
    const pricePerDroid = 3000;
    let totalPrice;

    const howMany = prompt(`У вас на счету ${credits}кредитов. \n\n Сколько дронов вы хотите заказать?`);

    if (!howMany){
        console.log(`Отменено пользователем!`);
    }else{
        totalPrice = credits - pricePerDroid * howMany ;
        if (totalPrice > 0){
            console.log (`Вы купили ${howMany} дроидов, на счету осталось ${totalPrice} кредитов.`);
        }else{
            console.log('Недостаточно средств на счету!');
        }
    }
}