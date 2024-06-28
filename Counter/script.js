let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previousCounterValue = counterElement.textContent
    let updatedValue = parseInt(previousCounterValue) + 1
    counterElement.textContent = updatedValue
    if (updatedValue > 0) {
        counterElement.style.color = "green"
    } else if (updatedValue < 0) {
        counterElement.style.color = "red"
    } else {
        counterElement.style.color = "black"
    }
}

function onDecrement() {
    let previousCounterValue = counterElement.textContent
    let updatedValue = parseInt(previousCounterValue) - 1
    counterElement.textContent = updatedValue
    if (updatedValue > 0) {
        counterElement.style.color = "green"
    } else if (updatedValue < 0) {
        counterElement.style.color = "red"
    } else {
        counterElement.style.color = "black"
    }
}

function onReset() {
    let previousCounterValue = counterElement.textContent
    let updatedValue = 0
    counterElement.textContent = updatedValue
    counterElement.style.color = "black"
}