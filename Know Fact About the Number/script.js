let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function displayFact(fact) {
    spinnerEl.classList.toggle("d-none")
    factEl.textContent = fact
}

userInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let userInput = userInputEl.value;
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInput;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.toggle("d-none")
                let {
                    fact
                } = jsonData
                displayFact(fact)
            });
    }
})