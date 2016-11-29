/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

/*
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/

/*Note:
    Euclidean algorithm to find the greatest common divisor (GCD) of two numbers. Then use GCD to find LCM https://en.wikipedia.org/wiki/Euclidean_algorithm 
*/

function smallestCommons(arr) {
    var small = Math.min.apply(this, arr);
    var large = Math.max.apply(this, arr);
    var common = small;
    for (; small < large; small++) {
        common = (common * (small + 1)) / gcd(common, small + 1);
    }
    return common;
}

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}