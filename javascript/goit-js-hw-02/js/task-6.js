export function task6(){
  'user strict'
  let input;
  const numbers = [];
  let total = 0;
  let choiсe;

  while (true) {
    input = prompt('Введите произвольное число:');

    if(input != null){
      input = Number(input);
      if (input){
        numbers.push(Number.parseInt(input))
        //console.log (numbers);
      }else{
        choiсe = confirm (`Вы ввели неправильное число. Продолжить?`);
        if (!choiсe){
          break;
        }
      }  
    }else{
      for(let i = 0; i < numbers.length; i++){
        total += numbers [i]; 
      }
      alert(`Общая сумма чисел равна = ${total}`);
      break;
    }

  }
}