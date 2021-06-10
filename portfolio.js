let burger = document.querySelector("#burger")
let burgericon = document.querySelector("#burgericon")
let nav = document.querySelector("#main-nav")

burger.addEventListener("click", () => {
    nav.classList.toggle("open")
    burgericon.classList.toggle("fa-bars")
    burgericon.classList.toggle("fa-times")
})