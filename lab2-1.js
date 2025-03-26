function isInteger(num) {
    return Number.isInteger(num);
}

function findPrimes(a, b) {
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

console.log(isInteger(1));     
console.log(isInteger(1.5));   
console.log(isInteger(-0.5)); 

findPrimes(2, 20);
