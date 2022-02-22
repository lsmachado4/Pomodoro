const timer = document.getElementById("timer")

timer.innerHTML = ("10:10:00")

document.addEventListener(

    "click", function (event) {
        if (event.target.classList.contains("play")) {
            timer.innerHTML = "clicou no play"
        }
    }
)







