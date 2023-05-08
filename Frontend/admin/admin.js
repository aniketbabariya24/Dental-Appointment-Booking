const BaseUrl = "https://dent-care-backend-aa29.onrender.com";

document.getElementById("services").style.display = "none";
document.getElementById("doctors").style.display = "none";

let services = document.getElementById("getServices");
services.addEventListener("click", callServices);

let getDoctors = document.getElementById("getDoctors");
getDoctors.addEventListener("click", callDoctors);

// fetching logics are here
async function callServices() {
    try {
        let response = await fetch(`${BaseUrl}/services`);
        let data = await response.json();
        document.getElementById("services").style.display = "grid";
        document.getElementById("doctors").style.display = "none";
        document.getElementById("men").style.display = "block";
        document.getElementById("style").style.display = "none";
        document.getElementById("men").style.textAlign = "center";
        services.classList.toggle("active");
        getDoctors.classList.remove("active");
        console.log(data);
        renderServices(data);
    } catch (error) {
        console.log(error);
    }
}

async function callDoctors() {
    try {
        let response = await fetch(`${BaseUrl}/doctors`);
        let data = await response.json();
        document.getElementById("services").style.display = "none";
        document.getElementById("doctors").style.display = "grid";
        services.classList.remove("active");
        document.getElementById("men").style.display = "none";
        document.getElementById("style").style.display = "block";
        document.getElementById("style").style.textAlign = "center";
        getDoctors.classList.toggle("active");
        console.log(data);
        doctors(data);
    } catch (error) {
        console.log(error);
    }
}

//data rendering is done here
function renderServices(data) {
    data.forEach((item) => {
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let name = document.createElement("h1");
        name.innerText = item.name;

        let image = document.createElement("img");
        image.src = item.image;

        let details = document.createElement("h5");
        details.innerText = item.details;

        let edit = document.createElement("button");
        edit.innerText = "Edit";
        edit.setAttribute("class", "edit-button");

        let del = document.createElement("button");
        del.setAttribute("class", "delete-button");
        del.innerText = "Delete";

        let id = item._id;

        edit.addEventListener("click", function () {
            const card = edit.parentNode;
            const cardTitle = card.querySelector("h1").textContent;
            const cardImage = card.querySelector("img").getAttribute("src");
            const cardContent = card.querySelector("h5").textContent;

            const modal = document.createElement("div");
            modal.classList.add("modal");

            const form = document.createElement("form");
            form.classList.add("edit-form");
            modal.appendChild(form);

            const imageLabel = document.createElement("label");
            imageLabel.textContent = "Image URL:";
            form.appendChild(imageLabel);

            const imageInput = document.createElement("input");
            imageInput.setAttribute("type", "url");
            imageInput.setAttribute("value", cardImage);
            form.appendChild(imageInput);

            const titleLabel = document.createElement("label");
            titleLabel.textContent = "Title:";
            form.appendChild(titleLabel);

            const titleInput = document.createElement("input");
            titleInput.setAttribute("type", "text");
            titleInput.setAttribute("value", cardTitle);
            form.appendChild(titleInput);

            const label = document.createElement("label");
            label.textContent = "Edit card content:";
            form.appendChild(label);

            const textarea = document.createElement("textarea");
            textarea.value = cardContent;
            form.appendChild(textarea);

            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            form.appendChild(saveButton);

            const closeButton = document.createElement("button");
            closeButton.textContent = "Close";
            form.appendChild(closeButton);

            card.appendChild(modal);

            titleInput.focus(); // Give focus to titleInput element

            saveButton.addEventListener("click", async (event) => {
                event.preventDefault();
                const formData = {
                    image: imageInput.value,
                    title: titleInput.value,
                    content: textarea.value,
                };
                try {
                    const response = await fetch(`${BaseUrl}/services/update/${id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    });
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const data = await response.json();
                    console.log(data); // log the response from the server

                    card.querySelector("img").setAttribute("src", formData.image);
                    card.querySelector("h1").textContent = formData.title;
                    card.querySelector("h5").textContent = formData.content;

                    modal.remove();

                    alert("Service data has been modified successfully");
                } catch (error) {
                    console.error("There was a problem with the PATCH request:", error);
                }
            });
            closeButton.addEventListener("click", () => {
                modal.remove();
            });
        });

        del.addEventListener("click", async () => {
            try {
                const response = await fetch(`${BaseUrl}/services/delete/${id}`, {
                    method: "DELETE",
                });
                if (!response.ok) {
                    throw new Error("Failed to delete service.");
                }
                const result = await response.json();
                alert("Data successfully deleted!");
                div.parentNode.removeChild(div);
                return result;
            } catch (error) {
                alert("Error deleting data!");
                console.error(error);
            }
        });
        div.append(image, name, details, edit, del);
        document.getElementById("services").append(div);
    });
}

function doctors(data) {
    data.forEach((item) => {
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let name = document.createElement("h1");
        name.innerText = item.name;

        let imageContainer = document.createElement("div");
        imageContainer.setAttribute("class", "image-container");
        let image = document.createElement("img");
        image.src = item.image;
        imageContainer.append(image);

        let qualification = document.createElement("h5");
        qualification.innerText = "Qualification :" + item.qualification;

        let experience = document.createElement("h5");
        experience.innerText = "Experience :" + item.experience;

        let edit = document.createElement("button");
        edit.innerText = "Edit";
        edit.setAttribute("class", "edit-button");

        let del = document.createElement("button");
        del.setAttribute("class", "delete-button");
        del.innerText = "Delete";

        let id = item._id;

        edit.addEventListener("click", function () {
            const card = edit.parentNode;
            const cardTitle = card.querySelector("h1").textContent;
            const cardImage = card.querySelector("img").getAttribute("src");
            const cardQualification = card.querySelector("h5").textContent;
            const cardExperience = card.querySelector("h5").textContent;

            const modal = document.createElement("div");
            modal.classList.add("modal");

            const form = document.createElement("form");
            form.classList.add("edit-form");
            modal.appendChild(form);

            const imageLabel = document.createElement("label");
            imageLabel.textContent = "Image URL:";
            form.appendChild(imageLabel);

            const imageInput = document.createElement("input");
            imageInput.setAttribute("type", "url");
            imageInput.setAttribute("value", cardImage);
            form.appendChild(imageInput);

            const titleLabel = document.createElement("label");
            titleLabel.textContent = "Name:";
            form.appendChild(titleLabel);

            const titleInput = document.createElement("input");
            titleInput.setAttribute("type", "text");
            titleInput.setAttribute("value", cardTitle);
            form.appendChild(titleInput);

            const qualificationLabel = document.createElement("label");
            qualificationLabel.textContent = "Qualification:";
            form.appendChild(qualificationLabel);

            const qualificationInput = document.createElement("input");
            qualificationInput.setAttribute("type", "text");
            qualificationInput.setAttribute("value", cardQualification);
            form.appendChild(qualificationInput);

            const experienceLabel = document.createElement("label");
            experienceLabel.textContent = "Experience:";
            form.appendChild(experienceLabel);

            const experienceInput = document.createElement("input");
            experienceInput.setAttribute("type", "text");
            experienceInput.setAttribute("value", cardExperience);
            form.appendChild(experienceInput);

            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            form.appendChild(saveButton);

            const closeButton = document.createElement("button");
            closeButton.textContent = "Close";
            form.appendChild(closeButton);

            card.appendChild(modal);

            titleInput.focus(); // Give focus to titleInput element

            saveButton.addEventListener("click", async (event) => {
                event.preventDefault();
                const formData = {
                    title: titleInput.value,
                    image: imageInput.value,
                    qualification: qualificationInput.value,
                    experience: experienceInput.value,
                };

                try {
                    const response = await fetch(`${BaseUrl}/doctors/update/${id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    });
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const data = await response.json();
                    console.log(data); // log the response from the server

                    card.querySelector("img").setAttribute("src", formData.image);
                    card.querySelector("h1").textContent = formData.title;
                    card.querySelector("h5").textContent = formData.qualification;
                    card.querySelector("h5").textContent = formData.experience;

                    modal.remove();
                    alert("Doctors data has been modified successfully");
                } catch (error) {
                    console.error("There was a problem with the PATCH request:", error);
                }
            });
            closeButton.addEventListener("click", () => {
                modal.remove();
            });
        });
        del.addEventListener("click", async () => {
            try {
                const response = await fetch(`${BaseUrl}/doctors/delete/${id}`, {
                    method: "DELETE",
                });
                if (!response.ok) {
                    throw new Error("Failed to delete service.");
                }
                const result = await response.json();
                alert("Data successfully deleted!");
                div.parentNode.removeChild(div);
                return result;
            } catch (error) {
                alert("Error deleting data!");
                console.error(error);
            }
        });
        div.append(imageContainer, name, qualification, experience, edit, del);
        document.getElementById("doctors").append(div);
    });
}

// form logic
const serviceForm = document.querySelector("#addmale form");
const doctorsForm = document.querySelector("#addstylists form");

serviceForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(serviceForm);
    const obj = {};
    formData.forEach((value, key) => {
        obj[key] = value;
    });
    for (let key in obj) {
        if (obj[key] == "" || obj[key] == undefined || obj[key] == null) {
            alert("Enter all the fields");
            return;
        }
    }
    console.log(obj);

    const response = await fetch(`${BaseUrl}/services/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });

    const result = await response.json();
    console.log(result);

    alert("Service added successfully");
    serviceForm.reset();
});

doctorsForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(doctorsForm);
    const obj = {};
    formData.forEach((value, key) => {
        obj[key] = value;
    });
    for (let key in obj) {
        if (obj[key] == "" || obj[key] == undefined || obj[key] == null) {
            alert("Enter all the fields");
            return;
        }
    }
    console.log(obj);

    const response = await fetch(`${BaseUrl}/doctors/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
    const result = await response.json();
    console.log(result);

    alert("Doctors added successfully");
    doctorsForm.reset();
});

// back to top button
var button = document.getElementById("back-to-top-button");
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});
button.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});