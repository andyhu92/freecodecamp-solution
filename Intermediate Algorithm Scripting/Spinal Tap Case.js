/*
    Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

/*
    spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
    spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
    spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
    spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
    spinalCase("AllThe-small Things") should return "all-the-small-things"
*/

function spinalCase(str) {
    var lowerCasePtn = /[a-z]/,
        upperCasePtn = /[A-Z]/;

    var arr = [],
        tmpStr = str[0];
    //start from second char, assume first char always belongs to first word
    for (var i = 1, l = str.length; i < l; i++) {
        //Append lowercase Char to word.
        if (lowerCasePtn.test(str[i])) tmpStr += str[i];
        //uppercase letter, for camalCase
        else if (upperCasePtn.test(str[i])) {
            if (tmpStr.length !== 0) arr.push(tmpStr);
            tmpStr = str[i];
        }
        //non-letter case
        else {
            arr.push(tmpStr);
            tmpStr = "";
        }
        if (i == l - 1) arr.push(tmpStr);
    }
    return arr.join("-").toLowerCase();
}