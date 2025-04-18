const findArmstrongNumber = (number) => {
    let digits = number.toString().split("");
    let power = digits.length
    let sum = digits.reduce((acc, digit)=> acc + Math.pow(Number(digit),power),0)
    return sum == number;
}
for(let x = 0; x<=10000;x++){
    let z = findArmstrongNumber(x)
    z && console.log(x)
}