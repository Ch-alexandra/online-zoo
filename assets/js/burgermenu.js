document.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector("body");
    let header = document.querySelector("header");
    let burger = document.querySelector(".burger");
    let headerList = document.querySelector(".header-list");
    let headerDesigned = document.querySelector(".header-copyright");

    let cross = document.createElement("div");
    cross.className = "burger-cross";

    let background = document.createElement("div");
    background.className = "black-background";

    burger.addEventListener("click", () => {
        header.classList.add("header-open");
        headerList.classList.add("header-list-open");
        headerDesigned.classList.add("header-copyright-open");
        burger.classList.add("burger-open");

        header.appendChild(cross);
        body.appendChild(background);
    });

    function closeBurger() {
        header.classList.remove("header-open");
        headerList.classList.remove("header-list-open");
        headerDesigned.classList.remove("header-copyright-open");
        burger.classList.remove("burger-open");

        header.removeChild(cross);
        body.removeChild(background);
    }

    cross.addEventListener("click", closeBurger);
    background.addEventListener("click", closeBurger);
})