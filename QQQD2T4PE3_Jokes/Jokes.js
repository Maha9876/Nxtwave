let jokeBtn = document.getElementById("jokeBtn");
let jokeText = document.getElementById("jokeText");
let spinner = document.getElementById("spinner");

function fun1() {
    spinner.classList.remove("d-none");
    jokeText.classList.add("d-none");
    let object = {
        method: "GET"
    };

    fetch("https://apis.ccbp.in/jokes/random", object)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonText) {
            console.log(jsonText.value);
            spinner.classList.add("d-none");
            jokeText.classList.remove("d-none");
            jokeText.textContent = jsonText.value;
        });
}

jokeBtn.addEventListener("click", fun1);