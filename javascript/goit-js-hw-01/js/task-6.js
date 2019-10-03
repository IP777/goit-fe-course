export function task6(){
    let input;
    let total = 0;
    let userInput;

    while (true) {
        userInput = prompt('Введите число');
      
        if (userInput === null) {
          break;
        }

        userInput = Number(userInput);  
        total += userInput;

        if (!userInput) {
            alert(`Было введено не число, попробуйте еще раз`);
            total = 0;
        }
        
      }

      if(total){
        alert(`Общая сумма чисел равна ${total}`);
      }  
      
      
}