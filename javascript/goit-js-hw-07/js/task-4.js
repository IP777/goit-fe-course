//export function task4() {
    const value = document.querySelector('#value');
    let counter = parseInt(value.textContent);
    const decrementBtn = document.querySelector('[data-action = decrement]')
    const incrementBtn = document.querySelector('[data-action = increment]')

    const counterEdit = () => value.textContent = counter;

    const handleClickPlus = () => counter = counter + 1;

    const handleClickMinus = () => counter = counter - 1;

    incrementBtn.addEventListener('click', handleClickPlus)
    incrementBtn.addEventListener('click', counterEdit)
    decrementBtn.addEventListener('click', handleClickMinus)
    decrementBtn.addEventListener('click', counterEdit)
    
    //console.log(`${counter.textContent} ${decrementBtn.textContent} ${incrementBtn.textContent}`)
//}
