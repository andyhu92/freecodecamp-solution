/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

/*
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/

function fearNotLetter(str) {
    for (var i = 0; i < str.length - 1; i++) {
        if (Next(str[i]) !== str[i + 1]) return Next(str[i]);
    }
    return undefined;
}

function Next(a) {
    return String.fromCharCode(a.charCodeAt() + 1);
}