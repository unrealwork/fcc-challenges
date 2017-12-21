exports.sumPrimes = function (num) {
    var sieve = [false, false];
    var i, j;
    for (i = 2; i <= num; i++) {
        sieve.push(true);
    }
    var acc = 0;
    i = 2;
    while (i <= num) {
        sieve[i] = true;
        acc += i;
        for (j = i; j <= num; j += i) {
            sieve[j] = false;
        }
        while (i <= num && !sieve[i]) {
            i++;
        }
    }
    return acc;
};