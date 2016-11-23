/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

/*
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
*/

function translatePigLatin(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    if (vowels.indexOf(str[0]) > -1) return str + "way";
    else {
        //first char is consonant, start from second
        for (var i = 1; i < str.length; i++) {
            //if find vowel
            if (vowels.indexOf(str[i]) > -1) {
                return str.slice(i) + str.slice(0, i) + "ay";
            }
        }
    }
}