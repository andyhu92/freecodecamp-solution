/*
Flatten a nested array. You must account for varying levels of nesting.
*/

/*
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

function steamrollArray(arr) {
    var res = [];
    flatten(arr);
    return res;

    function flatten(arr) {
        arr.forEach(function(val) {
            if (!Array.isArray(val)) res.push(val);
            else flatten(val);
        });
    }
}