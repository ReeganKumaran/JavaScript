const celsiusInput = document.getElementById("celsius")
const fahrenheitInput = document.getElementById("fahreheit")
const kelvinInput = document.getElementById("kelvin")
console.log("hello world");
console.log(celsiusInput)

let celsiusValue = 0;
let fahrenheitValue = 0;
let kelvinValue = 0;

const display = (celsius, fahrenheit, kelvin) => {
    celsiusInput.value = celsius.toFixed(2);
    fahrenheitInput.value = fahrenheit.toFixed(2)
    kelvinInput.value = kelvin.toFixed(2);
}  

celsiusInput.addEventListener("keydown",(e) => {
    if (e.key == "Enter"){
        celsiusValue = parseFloat(celsiusInput.value);
        fahrenheitValue = (celsiusValue  * 9/5) + 32;
        kelvinValue = (celsiusValue + 273.15);
        display(celsiusValue, fahrenheitValue, kelvinValue);
    }
})
fahrenheitInput.addEventListener("keydown", (e)=> {
    if(e.key == "Enter") {
        fahrenheitValue = parseFloat(fahrenheitInput.value);
        celsiusValue = (fahrenheitValue - 32) * 5/9;
        kelvinValue = celsiusValue + 273.15;
        display(celsiusValue, fahrenheitValue, kelvinValue);
    }
})
kelvinInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        kelvinValue = parseFloat(kelvinInput.value);
        celsiusValue = kelvinValue - 273.15;
        fahrenheitValue = (celsiusValue  * 9/5) + 32;
        display(celsiusValue, fahrenheitValue, kelvinValue);
    }
})