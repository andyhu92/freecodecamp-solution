/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

/*
addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
*/

function addTogether() {
    var args = Array.from(arguments);
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] !== "number") return undefined;
    }
    if (args.length === 2) return args[0] + args[1];
    else if (args.length === 1) {
        var number = args[0];
        return function(val) {
            if (typeof val !== "number") return undefined;
            return val + number;
        };
    } else throw new Error("addTogether only accept one or two arguments");
}