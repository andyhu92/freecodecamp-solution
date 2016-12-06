/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

/*
permAlone("aab") should return a number.
permAlone("aab") should return 2.
permAlone("aaa") should return 0.
permAlone("aabb") should return 8.
permAlone("abcdefa") should return 3600.
permAlone("abfdefa") should return 2640.
permAlone("zzzzzzzz") should return 0.
permAlone("a") should return 1.
permAlone("aaab") should return 0.
permAlone("aaabb") should return 12.
*/

/*Note:
    *Pre-filter. Some strings are impossible to have permutation have no repeating letter.
    1. For length < 4, if all characters are the same. 'a', 'bb', 'ccc'
    4. For length >= 4, if one character appears more than half(even) or half plus one(odd) of the string length.
       'aaab', 'bbbbc', 'ccccdd'... 
*/
function permAlone(str) {
    var l = str.length;
    if (l == 1) return 1;
    var count = 0;
    var regex = /([a-z])\1{1,}/; //check repeating
    //Pre-filter.
    var numOfRepeat = regex.exec(str.split('').sort().join(''))[0].length; 
    if (numOfRepeat === l || l >= 4 && numOfRepeat > Math.ceil(l / 2)) return 0;

    var result = permutation(Array.from(str)).map(function(val) {
        return val.join('');
    });

    for (var i = 0; i < result.length; i++) {
        if (/([a-z])\1{1,}/.test(result[i])) continue;
        else count++;
    }

    return count;

    function permutation(inputArr) {
        var results = [];
        function permute(arr, memo) {
            var cur;
            memo = memo || [];
            for (var i = 0; i < arr.length; i++) {
                cur = arr.splice(i, 1);
                if (arr.length === 0) {
                    results.push(memo.concat(cur));
                }
                permute(arr.slice(), memo.concat(cur));
                arr.splice(i, 0, cur[0]);
            }
            return results;
        }
        return permute(inputArr);
    }
}