export function task1(){
    const firstArr = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
    const secondArr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    function logItems(arr){
        for (let i = 0; i < arr.length; i += 1) {
            console.log(`${arr[i]} - ${i + 1}`);
          }
    }

    logItems(firstArr);
    logItems(secondArr);
}