// ------------------->>>>> API's <<<<<----------------------

const BaseUrl = "https://dent-care-backend-aa29.onrender.com";
const Default = `${BaseUrl}/feedback`;
const PostDataCheck = `${Default}/form`;

const forms = document.querySelector("form");

const data = () => {
    const Name = document.querySelector(".name");
    const Email = document.querySelector(".email");
    const Phone = document.querySelector(".phone");
    const Message = document.querySelector(".message");

    const obj = {
        name: Name.value,
        email: Email.value,
        phone: Phone.value,
        message: Message.value,
    };

    return obj;
};

forms.addEventListener("submit", (e) => {
    e.preventDefault();
    var UserData = data();
    if (
        UserData.name == "" &&
        UserData.email == "" &&
        UserData.phone == "" &&
        UserData.message == ""
    ) {
        Swal.fire({
            icon: "info",
            text: "Fill all fields.",
            width: "20%",
        });
    } else {
        userDatas(UserData);
    }
});

const userDatas = async (UserData) => {
    try {
        const res = await fetch(PostDataCheck, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(UserData),
        });

        const Response = await res.json();
        if (Response) {
            Swal.fire({
                icon: "success",
                title: "FeedBack Created Successfully!",
                width: "31%",
                background: "white",
                color: "#00acb1",
                confirmButton: true,
            }).then((value) => {
                if (value.isConfirmed) {
                    window.location.href = "../index.html";
                }
            });
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Bad Request 404",
            width: "25%",
        });
    }
};
