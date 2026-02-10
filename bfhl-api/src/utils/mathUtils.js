exports.getFibonacci = (n) => {
    if (typeof n !== 'number' || n <= 0) return [];
    if (n === 1) return [0];
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
};

exports.filterPrimes = (arr) => {
    if (!Array.isArray(arr)) return [];
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    return arr.filter(num => typeof num === 'number' && isPrime(num));
};

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

exports.getHCF = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr.reduce((acc, curr) => gcd(acc, curr));
};

exports.getLCM = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    const lcm = (a, b) => (a * b) / gcd(a, b);
    return arr.reduce((acc, curr) => lcm(acc, curr));
};