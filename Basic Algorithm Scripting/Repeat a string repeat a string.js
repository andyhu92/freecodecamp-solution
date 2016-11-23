/*
Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.
*/

/*
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
*/

/*Note:
   new Array(arrayLength) returns a new JavaScript array with length set to that number.
   Use Array.join and use str as separator. new Array(4).join("?") === "???"
*/
function repeatStringNumTimes(str, num) {
    if (num < 0) return "";
    return new Array(num + 1).join(str);
}