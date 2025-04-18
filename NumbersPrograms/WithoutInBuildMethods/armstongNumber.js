const digitsCount = (number) => {
    let temp = number;
    let count = 0;
    while (temp) {
        temp = (temp / 10) | 0;
        count++;
    }
    return count;
}
const isArmstrongNumber = (number) => {
    let temp = number;
    let digits = digitsCount(number);
    let result = 0;
    while (temp > 0) {
        let digit = temp % 10;
        let power = 1;
        for (let x = 1; x <= digits; x++) {
            power *= digit;
        }
        result += power;
        temp = Math.floor(temp/10);   
    }
    return result == number
}
for(let x = 0; x <= 10000; x++){
    if(isArmstrongNumber(x)){
        console.log(x)
    }
}
