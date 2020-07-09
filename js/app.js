const btn = document.querySelector(".menu-toggle-button");

// const menu = document.querySelector("nav")
// const mobile = window.matchMedia("screen and (min-width: 720px")


// btn.addEventListener("click", function(){
//     menu.classList.toggle("show");
// })

// mobile.addListener(function(mobile){
//     if (mobile.matches) {
//         menu.classList.remove("show")
//     }
// })

const menu = document.getElementById("navPanel")
const flexDiv = document.querySelector("div")
const mobile = window.matchMedia("screen and (max-width: 720px")


btn.addEventListener("click", function(){
    menu.classList.toggle("hidden");
    flexDiv.classList.toggle("flex")
})

mobile.addListener(function(mobile){
    if (mobile.matches) {
        menu.classList.add("hidden")
        flexDiv.classList.remove("flex")
    } else {
        menu.classList.add("hidden")
        flexDiv.classList.remove("flex")
    }
})













// checkMenu(mobile);

// btn.addEventListener('click', function () {
//     menu.classList.toggle('show');
// })

// mobile.addListener(function (mobile) {
//     checkMenu(mobile);
// })

// function checkMenu(mobile) {
//     if (mobile.matches) {
//         menu.classList.remove("show")
//     }
// }