export function task2(){
    const text = "Золотые купола. На груди наколоты. Только синие они. И ни крапа золота";
    const price = 20;

    function calculateEngravingPrice(message = 'Hello world!', pricePerWord = 10){
        let wordArr = message.split(' ').length;
        let summ = wordArr * pricePerWord;

        return `Цена гравировки текста "${message}" - ${summ}грн`;
    }

    console.log(calculateEngravingPrice(text, price));

    console.log(
      calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        10,
      ),
    ); // 80
    
    console.log(
      calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',20,),
    ); // 160
    
    console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
    console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
}