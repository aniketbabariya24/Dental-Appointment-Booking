// ------------------- API's ----------------------

const BaseUrl = "https://dent-care-backend-aa29.onrender.com";
const Default = `${BaseUrl}/appointments`;
const AppointmenPostData = `${Default}/add`;

const user_name = document.getElementById("user_name");
const data = JSON.parse(localStorage.getItem("userdata")) || {};
let doctor = JSON.parse(localStorage.getItem("selectedDoctor"));
let service = JSON.parse(localStorage.getItem("selectedService"));

const form = document.getElementById("booking_form");
form.doctorName.value = doctor.name;
form.service.value = service.name;

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
              window.location.href="../index.html";
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

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        date: form.date.value,
        time: form.time.value,
        doctorName: form.doctorName.value,
        service: form.service.value,
    };
    postData(data);
});

async function postData(el) {
    let details = {
        date: el.date,
        time: el.time,
        doctorID: doctor._id,
        serviceID: service._id,
        userID: data.userid,
    };
    const response = await fetch(AppointmenPostData, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
    });
    const res = await response.json();
    Swal.fire({
        icon: "success",
        title: "Your Appointment has been booked successfully",
        text: "Please check your registred email",
        timer: 2500,
        imageAlt: "Custom image",
    });
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 2500);
}

// congratulation js

$(window).on("load", function () {
    setTimeout(function () {
        $(".done").addClass("drawn");
    }, 1000);
});
