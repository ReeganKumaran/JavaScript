function armstrong (n) {
    let sum = 0;
    let temp = n;
    const digits = String(n).length;
    
    while (temp > 0) {
        const digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }
    
    return sum === n;
    
}