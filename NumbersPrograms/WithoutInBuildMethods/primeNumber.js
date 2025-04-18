const findPrimeNumber = (number) => {
    if (number < 2) return false
    for (let x = 2; x <= Math.sqrt(number); x++) {
        console.log(Math.sqrt(x), number, x)
        // console.log(number, x, number % x)
        if (!(number % x)) return false
    }
    return true
}
console.log(findPrimeNumber(97)); // true
// for (let y = 0; y <= 100; y++) {
//     let z = findPrimeNumber(y);
//     z && console.log(y)
// }
