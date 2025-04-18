let x = 1;
a();
b();
console.log("start " + x)
function a(){
    // x = 10;
    console.log(x)
}
function b(){
    let x = 100;
    console.log(x)
}
// fetch()
console.log("end " + x)