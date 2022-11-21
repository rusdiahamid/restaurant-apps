const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
});

window.onscroll = function () {
    var target = document.getElementById("home");

    var height = window.innerHeight;

    var scrollTop =
        window.pageYOffset !== undefined
            ? window.pageYOffset
            : (document.documentElement || document.body.parentNode || document.body)
                .scrollTop;

    // Change this if you want it to fade faster
    height = height / 2;

    target.style.opacity = (height - scrollTop) / height;
};
