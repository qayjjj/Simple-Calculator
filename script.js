// select all the buttons
const buttons = document.querySelectorAll("button")
// select the display box
const display = document.querySelector(".display")

// add event listener for buttons
buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
        const clickedButton = event.target.value
        if (clickedButton === "=") {
            display.value = eval(display.value)
        } else if (clickedButton === "C") {
            display.value = ""
        } else {
            display.value += clickedButton
        }
    })
})
