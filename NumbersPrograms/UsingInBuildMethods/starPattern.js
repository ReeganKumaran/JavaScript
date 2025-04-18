const pyramidPattern = (number) => {
    let output = "";
    for (let row = 0; row <= (number -1); row++) {
        for (let space = 0; space <= ((number - row) -1); space++) { 
            output += "  "
        }
        for(let star = 0; star < (row*2)+1; star ++){
            output += " *"
        }
        output += "\n"
    }
    console.log(output);
}
// pyramidPattern(5)
