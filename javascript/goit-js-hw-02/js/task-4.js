export function task4() {
    const formatString = function(string, value = 40) {
        if (string.length > value) {
            return `${string.slice(0, value)}...`;
        } else {
            return string;
        }
    };

    console.log(formatString("Curabitur ligula sapien, tincidunt non."));
    // вернется оригинальная строка

    console.log(
        formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
    );
    // вернется форматированная строка

    console.log(formatString("Curabitur ligula sapien."));
    // вернется оригинальная строка

    console.log(
        formatString(
            "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
        )
    );
    // вернется форматированная строка
}
