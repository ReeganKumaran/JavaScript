function calculateTotal () {
    document.getElementById("price").innerHTML = "$" + (((parseInt(document.getElementById("tipPercentage").value) / 100) * (parseInt(document.getElementById("billAmount").value))) + parseInt(document.getElementById("billAmount").value))
}