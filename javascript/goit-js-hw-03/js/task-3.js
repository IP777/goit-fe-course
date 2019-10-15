export function task3() {
    function findLongestWord(string = "Hello world!") {
        let wordArr = string.split(" ");
        let max = wordArr[0];

        for (let i = 1; i < wordArr.length; i++) {
            if (wordArr[i].length > max.length) {
                max = wordArr[i];
            }
        }

        return max;
    }

    console.log(
        findLongestWord("The quick brown fox jumped over the lazy dog")
    ); // 'jumped'
    console.log(findLongestWord("Google do a roll")); // 'Google'
    console.log(findLongestWord("May the force be with you")); // 'force'
}
