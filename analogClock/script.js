const hourEl = document.getElementsByClassName("hour")[0];
const minEl = document.getElementsByClassName("min")[0];
const secEl = document.getElementsByClassName("sec")[0];


setInterval(function () {
    let time = new Date();
    let sec = time.getSeconds();
    let hour = time.getHours();

    hour = hour % 12 || 12;
    
    let min = time.getMinutes();
    let hourRotate = hour * 30
    let minRotate = min * 6;
    let secRotate = sec * 6;
    
    hourEl.style.transform = `rotate(${hourRotate}deg)`;
    minEl.style.transform = `rotate(${minRotate}deg)`;
    secEl.style.transform = `rotate(${secRotate}deg)`;
}, 1000)


