const expenseForm = document.getElementById("expenseForm");
const card = document.getElementById("card");
const addMem = document.getElementById("addMem");
const userList = document.getElementById("userList");
const newUser = document.getElementById("newUser");
const totalExpense = document.getElementById("totalExpense");
const yourExpense = document.getElementById("yourExpense");
const friendExpense = document.getElementById("friendExpense");
const whoPay = document.getElementById("whoPay");
const deleteLocal = document.getElementById("deleteLocal");
const split = document.getElementById('split')
let editingIndex;
let userData = [];

const setDataToTheLocal = () => {
    try {
        localStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
        console.error("Error saving to localStorage:", error);
    }
};

const getDataToTheLocal = () => {
    try {
        const data = localStorage.getItem("userData");
        userData = data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error reading from localStorage:", error);
        userData = [];
    }
};

const option = (data, index) => {
    whoPay.innerHTML = `<option selected value= '0'>You</option>` +
        `<option value="${index + 1}">${data}</option>`;
};

const updateUserData = () => {
    card.innerHTML = userData.map((data, index) => {
        console.log(data.textColor)
        return `
        <div class="row mb-2">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-2">
                                <img class="rounded-4" src="https://randomuser.me/portraits/${index % 2 ? "men" : "women"}/${Math.floor(index / 2)}.jpg" width="100px" height="100px" alt="image">
                            </div>
                            <div class="col-6">
                                <small>${new Date(data.id).toLocaleString()}</small>
                                <h4>${data.name}</h4>
                                <p id="msg-${index}" class= "${data.textColor ? data.textColor :""}">${data.description ? data.description : ""}</p>
                            </div>
                            <div class="col-4 text-end">
                                <button class="btn btn-dark submitBtn" data-index="${index}">Submit</button>
                                <button class="btn btn-danger removeBtn" data-index="${index}">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `}).join("");

    document.querySelectorAll(".submitBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            editingIndex = btn.getAttribute("data-index");
            console.log(editingIndex);
            option(userData[editingIndex].name, editingIndex);
            expenseForm.classList.remove("hide");
        });
    });

    document.querySelectorAll(".removeBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.getAttribute("data-index");
            userData.splice(index, 1);
            setDataToTheLocal();
            updateUserData();
            option();
        });
    });
};

const addFunction = () => {
    const name = newUser.value.trim();
    if (name) {
        userData.push({
            id: Date.now(),
            name,
        });
        newUser.value = "";
        setDataToTheLocal();
        updateUserData();
        option();
        userList.classList.toggle("hide", userData.length === 0);
    }
};

addMem.addEventListener("click", addFunction);

newUser.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addFunction();
});

const initialSetup = () => {
    getDataToTheLocal();
    updateUserData();
    option();
    userList.classList.toggle("hide", userData.length === 0);
};

initialSetup();

deleteLocal.addEventListener("click", () => {
    localStorage.clear();
    userData = [];
    initialSetup();
});

friendExpense.addEventListener("click", () => {
    friendExpense.value = totalExpense.value - yourExpense.value;

    // console.log(whoPay.value)
});

split.addEventListener('click', (event) => {
    event.preventDefault();

    // Validate input fields
    if (!totalExpense.value || !yourExpense.value || !friendExpense.value) {
        console.error("All expense fields must be filled out.");
        alert("Please fill out all expense fields before splitting.");
        return;
    }

    if (editingIndex === undefined || editingIndex < 0 || editingIndex >= userData.length) {
        console.error("Invalid editing index.");
        alert("Please select a valid user to split the expense.");
        return;
    }

    // Update the description based on whoPay value
    const payerName = whoPay.value ? userData[editingIndex].name : "You";
    const amount = friendExpense.value;

    // Update the user data
    if (whoPay.value === "1") { // Assuming "0" means "You"
        userData[editingIndex].description = `You need to give ${amount}`;
    } else {
        userData[editingIndex].description = `${payerName} needs to give ${amount}`;
    }

    // Update the UI
    
    // Reapply the color changes after updating the DOM
    const descriptionElement = document.getElementById(`msg-${editingIndex}`);
    if (whoPay.value === "0") {
        userData[editingIndex].textColor = "text-danger"
        console.log(userData)
        // descriptionElement.className = "text-danger"; // Red text
    } else {
        userData[editingIndex].textColor = "text-success"
        console.log(userData)
        // descriptionElement.className = "text-success"; // Green text
    }

    updateUserData();

    // Hide the form if inputs are valid
    if (friendExpense.value && totalExpense.value && yourExpense.value) {
        expenseForm.classList.add("hide");
    }
});