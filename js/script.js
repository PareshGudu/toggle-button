let ModeBtn = document.querySelector("#btn1");
let body = document.querySelector("body");
let CurrMode = "light";

ModeBtn.addEventListener("click", () => {
    if (CurrMode === "light") {
        CurrMode = "dark"
        body.classList.add("text");
        body.classList.remove("text1")
        ModeBtn.innerText = "Turn Of"
    } else {
        CurrMode = "light"
        body.classList.add("text1");
        body.classList.remove("text");
        ModeBtn.innerText = "Turn On Light"
    }
    console.log(CurrMode)
})

