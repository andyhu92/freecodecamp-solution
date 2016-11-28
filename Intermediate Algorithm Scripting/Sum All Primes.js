/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

/*
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

/*Note:
Using Sieve of Eratosthenes  https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
*/

function sumPrimes(num) {
    var isPrime = [],
        sum = 0;
    for (var i = 2; i <= num; i++) {
        isPrime[i] = true;
    }
    for (i = 2; i * i <= num; i++) {
        if (!isPrime[i]) continue;
        for (var j = i * i; j <= num; j += i) {
            isPrime[j] = false;
        }
    }
    isPrime.forEach(function(val, index) {
        if (val) sum += index;
    });
    return sum;
}