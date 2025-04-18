const isNeonNumber = (number) => {
    let sum = 0;
    let sqrt = number * number; 
    
    while(sqrt > 0){
        sum += sqrt%10; 
        sqrt = Math.floor(sqrt/10);
    }
    return sum == number
}

let range = 100;
for(let i = 0; i<= range; i++){
    let neon = isNeonNumber(i);
    neon && console.log(i);
}