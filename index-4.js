const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "-", "+", "="];
let output = "";

// function to calculate and button cliccked
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100")); // if output is % , replace with /100 before evaluating.
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DLE") {
        output = output.toString().slice(0, -1); // click DEL , remove the last character from the output.
    } else {
        if (output === "" && specialChars.includes(btnValue)) return; // includes("search to item")
        output += btnValue; 
    }
    display.value = output
};

buttons.forEach(button => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
