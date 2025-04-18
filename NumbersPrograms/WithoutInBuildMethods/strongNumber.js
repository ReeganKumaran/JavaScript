const findFactorialNumber = (number) => {
    let sum = 1;
    while(number){
        sum *= number;
        number--
    }
    return sum
}
const isStrongNumber = (number) =>{ 
    let temp = number
    let sum = 0;
    while(temp) {
        sum += findFactorialNumber(temp%10)
        temp = Math.floor(temp/10);
    }
    return sum == number;
}   
for(let a = 0; a <= 10000; a ++){
    let b = isStrongNumber(a);
    b && console.log(a);
}