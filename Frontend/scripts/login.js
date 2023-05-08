// ------------------- API's ----------------------

const BaseUrl = "https://dent-care-backend-aa29.onrender.com";
const Default = `${BaseUrl}/users`;
const RegisterPostData = `${Default}/register`;
const LoginPostData = `${Default}/login`;


const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
});
Toast.fire({
  icon: "success",
  title: "Welcome to Login page",
});

// signup

const singupfrom = document.getElementById("signUpForm");
singupfrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const signUpName = document.getElementById("signUpName");
  const signUpEmail = document.getElementById("signUpEmail");
  const signUpPassword = document.getElementById("signUpPassword");
  const userDetails = {
    name: signUpName.value,
    email: signUpEmail.value,
    password: signUpPassword.value,
  };
  register(userDetails);
});

const register = async (user) => {
  try {
    const res = await fetch(RegisterPostData, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let data = await res.json();
    if (data.error) {
      await Toast.fire({
        icon: "error",
        title: data.error,
      });
    } else {
      await Toast.fire({
        icon: "success",
        title: "User created successfully",
      });
    }
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Bad request 404",
      icon: "error",
      confirmButtonText: "Retry",
    });
  }
};

// login

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const userDetails = {
    email: loginEmail.value,
    password: loginPassword.value,
  };
  login(userDetails);
});

const login = async (user) => {
  try {
    const res = await fetch(LoginPostData, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    let data = await res.json();
    if (data.message) {
      const { value: OTP } = await Swal.fire({
        title: "Check your OTP in mailbox",
        input: "number",
        inputLabel: "",
        inputPlaceholder: "Enter your OTP",
        inputAttributes: {
          maxlength: 4,
          autocapitalize: "off",
          autocorrect: "off",
        },
      });

      if (OTP) {
        if (data.otp == OTP) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          await Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
          localStorage.setItem("userdata", JSON.stringify(data));
          // relocate to home page
          window.location.href = "../index.html";
        } else {
          Swal.fire(`Invalid OTP: ${OTP}`);
        }
      } else {
        Swal.fire(`Invalid OTP: ${OTP}`);
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: data.error,
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Bad request 404",
      icon: "error",
      confirmButtonText: "Retry",
    });
  }
};
