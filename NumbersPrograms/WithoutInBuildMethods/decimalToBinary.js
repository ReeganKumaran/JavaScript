function decimalToBinary(num) {
    if (num === 0) return 0;

    let number = num;
    let binary = 0;
    let place = 1; // To track the position of each binary digit

    while (number > 0) {
        let remainder = number % 2; // Get the binary digit (0 or 1)
        binary += remainder * place; // Add the digit to the correct place
        place *= 10; // Move to the next place (10, 100, 1000, etc.)
        number = number / 2 | 0; // Divide by 2 and truncate the decimal part
    }

    return binary;
}

// Test cases
console.log(decimalToBinary(11)); // Output: 1011
console.log(decimalToBinary(0));  // Output: 0
console.log(decimalToBinary(255)); // Output: 11111111
console.log(decimalToBinary(64)); // Output: 1000000