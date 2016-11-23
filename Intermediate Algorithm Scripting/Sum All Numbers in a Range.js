/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

/*
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/

/*Note:
    Sum of Arithmetic progression n*(A1 + An)/2
*/
function sumAll(arr) {
    return (Math.abs(arr[0] - arr[1]) + 1) * (arr[0] + arr[1]) / 2;
}
