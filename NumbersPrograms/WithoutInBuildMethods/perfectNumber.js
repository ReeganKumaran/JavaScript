const isPerfectNumber = (number) => {
    if (number <= 1) return false;

    let sumOfFactors = 1; // 1 is always a factor
    const sqrtNumber = Math.sqrt(number);

    for (let i = 2; i <= sqrtNumber; i++) {
        if (number % i === 0) {
            sumOfFactors += i;
            if (i !== number / i) {
                sumOfFactors += number / i; // Add the corresponding factor
            }
        }
    }

    return sumOfFactors === number;
};

for (let i = 1; i <= 100000000; i++) {
    if (isPerfectNumber(i)) {
        console.log(i);
    }
}



