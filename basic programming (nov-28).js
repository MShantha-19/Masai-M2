function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
