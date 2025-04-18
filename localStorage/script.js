document.addEventListener("DOMContentLoaded", function () {

    const ls = window.localStorage;  // Alias for localStorage

    const inputUserName = document.querySelector("#userName");   // User Name
    const inputPassword = document.querySelector("#userPassword"); // User Password

    const btnLoad = document.querySelector("#btnLoad");          // Load button
    const btnSubmit = document.querySelector("#btnSubmit");      // Submit button
    const btnClear = document.querySelector("#btnClear");
    
    const errorMsg = document.querySelector("#alart"); // alart message 

    btnSubmit.addEventListener("click", updateLocal)
    btnLoad.addEventListener("click", loadDate)
    btnClear.addEventListener("click", clearMyLocal);

    function loadDate() {
        inputUserName.value = ls.getItem("userName");
        inputPassword.value = ls.getItem("userPassword")
    }

    function clearMyLocal () {
        ls.clear()
    }
    function updateLocal() {
        if (inputPassword.value != "" && inputUserName.value != "") {
            ls.setItem("userName", inputUserName.value)
            ls.setItem("userPassword", inputPassword.value)
            errorMsg.textContent = "";
        }
        else {
            if (inputPassword.value === "" && inputUserName.value === "")
                errorMsg.textContent = "Fill the Form";
            else if (inputPassword.value === "")
                errorMsg.textContent = "Enter the password";
            else if (inputUserName.value === "")
                errorMsg.textContent = "Enter the Username";
            }
    }
});
