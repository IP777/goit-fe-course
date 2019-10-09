export function task5(){
    const countryArr = ['Китай', 'Чили', 'Австралия', 'Индия', 'Ямайка']; 
    const costArr = [100, 250, 170, 80, 120];
    let price = 0;

    const country = prompt('В какую страну вы хотитете доставку товара?');

    if(country){
        switch(country.toLowerCase()){
            case (countryArr[0].toLowerCase()):
                price = 0;
                break;
            case (countryArr[1].toLowerCase()):
                price = 1;
                break;
            case (countryArr[2].toLowerCase()):
                price = 2;
                break;
            case (countryArr[3].toLowerCase()):
                price = 3;
                break;
            case (countryArr[4].toLowerCase()):
                price = 4;
                break;
            default:
                price = -1;
                break;
        }

        if (price >= 0){
            console.log(`Доставка в ${countryArr[price]} будет стоить ${costArr [price]}кредитов`);
        }else{
            console.log (`В стране "${country}" доставка не доступна`);
        }
    }else{
        console.log(`Доставка отменена`);
    }
}