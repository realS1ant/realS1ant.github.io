const navIcon = document.querySelector("#header .nav-icon");
const navList = document.querySelector(".nav-list");

navIcon.addEventListener('click', () => {
    navList.classList.toggle("activated");
    navIcon.classList.toggle("activated");
});

navList.addEventListener('click', () => {
    navList.classList.toggle("activated");
    navIcon.classList.toggle("activated");
    console.log("click!");
});