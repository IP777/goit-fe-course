export function task4(){
    function formatString (string) {
        let newString = string.split('');

        if (newString.length > 40){
            newString.splice(40);
            newString.push('...');
            return newString.join('');
        }else{
            return newString.join('');
        }    
    }
    
    console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
    // вернется оригинальная строка

    console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
    // вернется форматированная строка

    console.log(formatString('Curabitur ligula sapien.'));
    // вернется оригинальная строка

    console.log(
        formatString(
            'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
        ),
    );
    // вернется форматированная строка
}