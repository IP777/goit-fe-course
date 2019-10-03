export function task5(){
    let countryArr = ['Китай', 'Чили', 'Австралия', 'Индия', 'Ямайка']; 
    let costArr = [100, 250, 170, 80, 120];

    const country = prompt('В какую страну вы хотитете доставку товара?');

    if(country){
        switch(country.toLowerCase()){
            case (countryArr[0].toLowerCase()):
                console.log(`Доставка в ${countryArr[0]} будет стоить ${costArr [0]}кредитов`);
                break;
            case (countryArr[1].toLowerCase()):
                console.log(`Доставка в ${countryArr[1]} будет стоить ${costArr [1]}кредитов`);
                break;
            case (countryArr[2].toLowerCase()):
                console.log(`Доставка в ${countryArr[2]} будет стоить ${costArr [2]}кредитов`);
                break;
            case (countryArr[3].toLowerCase()):
                console.log(`Доставка в ${countryArr[3]} будет стоить ${costArr [3]}кредитов`);
                break;
            case (countryArr[4].toLowerCase()):
                console.log(`Доставка в ${countryArr[4]} будет стоить ${costArr [4]}кредитов`);
                break;
            default:
                console.log (`В стране "${country}" доставка не доступна`);
                break;
        }
    }else{
        console.log(`Доставка отменена`);
    }
}