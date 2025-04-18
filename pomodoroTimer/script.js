let min = 25;
let sec = 0;
const display = document.getElementById("display");
let timerToggle = false;
let var1
let zero
const start = () => {
    if (timerToggle == true) return;
    var1 = setInterval(pomodoroTimer, 1000)
    timerToggle = true
}
const stop = () => {
    timerToggle = false
    clearInterval(var1);
}
const reset = () => {
    timerToggle = false;
    min = 25;
    sec = 0;
    display.textContent = "25:00";
    clearInterval(var1);
}

function pomodoroTimer() {
    if (min == 0 && sec == 0) {
        clearInterval(var1);
        timerToggle = false
    }
    if (!sec) {
        min--;
        sec = 60;
    }
    sec--;
    if((Math.floor(sec / 10)) == 0)
        zero = "0"
    else zero = ""
    display.textContent = min + ":" + zero + sec;
}