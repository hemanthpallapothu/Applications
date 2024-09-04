let jokeText = document.getElementById("jokeText")
let jokeBtn = document.getElementById("jokeBtn")
let spinner = document.getElementById("spinner");

function displayJoke(jsonData) {
    spinner.classList.toggle("d-none")
    jokeText.textContent = jsonData.value
}

jokeBtn.onclick = function() {
    spinner.classList.toggle("d-none")
    let url = "https://apis.ccbp.in/jokes/random"
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            displayJoke(jsonData)
        })
}