function binaryToDecimal(binary) {
  let decimal = 0;
  let base = 1; // Initialize base value to 1 (2^0)

  // Loop through each digit in the binary number
  for (let i = binary.length - 1; i >= 0; i--) {
    // Convert binary digit to decimal and add to total
    decimal += (binary[i] - '0') * base;
    base *= 2; // Update base value (2^n)
  }

  return decimal;
}