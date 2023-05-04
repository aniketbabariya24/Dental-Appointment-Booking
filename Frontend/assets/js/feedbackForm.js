// ------------------- API's ----------------------

const BaseUrl = "https://hairsalonbackend-production-1188.up.railway.app";
const Default = `${BaseUrl}/feedback`;
const PostDataCheck = `${Default}/forms`;

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
  userDatas(UserData);
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

    const Response = await res.json()
     console.log(Response);
    if (Response.status == 200) {
      Swal.fire({
        title: "FeedBack Created Successfully",
        width: "25%",
        background: "white",
        color: "red",
      });
    }
  } catch (error) 
  {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Bad Request 404',
        width:"25%",
      })
  }
};
