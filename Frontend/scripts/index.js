const user_name = document.getElementById("user_name");
const data = JSON.parse(localStorage.getItem("userdata")) || {};
const logout_btn = document.getElementById("logout_btn");
if (data.name) {
    user_name.innerText = data.name;
    user_name.href = "#";
    logout_btn.style.display = "block";
} else {
    user_name.innerText = "Login";
}

logout_btn.addEventListener("click", () => {
    Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Logout!",
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("userdata");
          Swal.fire("Logout Successfull!").then((res) => {
            if (res) {
              window.location.reload();
            }
          });
        }
      });
});
/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
};

/**
 * PRELOADER
 *
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

/**
 * MOBILE NAVBAR
 *
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * HEADER & BACK TOP BTN
 *
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
};

window.addEventListener("scroll", activeElementOnScroll);

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        if (
            revealElements[i].getBoundingClientRect().top <
            window.innerHeight / 1.15
        ) {
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
};

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

const feedbackButton = document.querySelector("#feedbackButton");
feedbackButton.addEventListener("click", ()=>{
    const inputData = document.querySelector("#inputEmail").value;

    if(inputData==""){
        return Swal.fire({
            icon: "info",
            text: "Fill all fields.",
            width: "27%",
        });
    }else{
        window.location.href ="../html/feedbackForm.html";
    }
})
