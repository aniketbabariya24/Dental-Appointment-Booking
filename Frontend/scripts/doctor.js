// ------------------- API's ----------------------

const BaseUrl = 'https://dent-care-backend-aa29.onrender.com';
const Default = `${BaseUrl}/doctors`;
const DoctorsGetData = `${Default}/`;


const user_name = document.getElementById("user_name");
let data = JSON.parse(localStorage.getItem("userdata")) || {};
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

// doctors section

const main_containers = document.getElementById("main_containers");

fetchData();
async function fetchData() {
    const response = await fetch(DoctorsGetData);
    const data = await response.json();
    localStorage.setItem("allDoctors", JSON.stringify(data));
    appendData(data);
}
// appendData(arr);
function appendData(arr) {
    let data = arr.map((el, ind) => {
        let qualificationArr = el.qualification.split("|");
        return `

                  <div class="items">
                    <div class="img-container">
                        <img class="doc_img"
                            src=${el.image}
                            alt="img"
                        />
                    </div>
                    <div class="about-container">
                        <h3 class="about-title">${el.name}</h3>
                        <ul class="qualification-list">
                            <li>${qualificationArr[0]}</li>
                            <li>${
                                qualificationArr[1] ? qualificationArr[1] : " "
                            }</li>
                        </ul>
                        <h4 class="experience_h4">
                            <span class="doctor-expenience">${
                                el.experience
                            }</span>+ years of
                            experience | Speaks :
                            <span class="languages">${el.language}</span>
                        </h4>
                    </div>
                    <div class="appointment-container">
                        <p class="charges-info">
                            <b> ₹<span id="doctor-charges">${
                                el.charge
                            }</span> </b>
                            per consultation
                        </p>
                        <button onclick ="relocate(${ind})" class="button-25" role="button">
                            Book An Appointment
                        </button>
                    </div>
                </div>
                  `;
    });
    main_containers.innerHTML = data.join(",");
}

function relocate(ind) {
    data = JSON.parse(localStorage.getItem("userdata")) || null;
    if (data) {
        const selectedDoctor = JSON.parse(localStorage.getItem("allDoctors"))[
            ind
        ];
        localStorage.setItem("selectedDoctor", JSON.stringify(selectedDoctor));
        window.location.href = "../html/appointment.html";
    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
        });
        Toast.fire({
            icon: "error",
            width: "300px",
            title: "Login First!",
        });
    }
}
