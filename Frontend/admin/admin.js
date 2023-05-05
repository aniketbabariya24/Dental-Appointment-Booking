// const BaseUrl = "https://nice-pink-antelope-gear.cyclic.app";

document.getElementById("renderServices").style.display = "none";
document.getElementById("renderDoctors").style.display = "none";

let services = document.getElementById("male");
services.addEventListener("click", callMale);

let stylists = document.getElementById("stylists");
stylists.addEventListener("click", callStylists);

// fetching logics are here
async function callMale() {
    try {
        let response = await fetch(`${BaseUrl}/services/male`);
        let data = await response.json();
        document.getElementById("renderServices").style.display = "grid";
        document.getElementById("renderDoctors").style.display = "none";
        document.getElementById("men").style.display = "block";
        document.getElementById("style").style.display = "none";
        document.getElementById("men").style.textAlign = "center";
        services.classList.toggle("active");
        stylists.classList.remove("active");
        console.log(data);
        renderMale(data);
    } catch (error) {
        console.log(error);
    }
}

async function callStylists() {
    try {
        let response = await fetch(`${BaseUrl}/stylist/styler`);
        let data = await response.json();
        document.getElementById("renderServices").style.display = "none";
        document.getElementById("renderDoctors").style.display = "grid";
        services.classList.remove("active");
        document.getElementById("men").style.display = "none";
        document.getElementById("style").style.display = "block";
        document.getElementById("style").style.textAlign = "center";
        stylists.classList.toggle("active");
        console.log(data);
        renderDoctors(data);
    } catch (error) {
        console.log(error);
    }
}

//data rendering is done here
function renderMale(data) {
    data.forEach((item) => {
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let name = document.createElement("h1");
        name.innerText = item.name;
        let image = document.createElement("img");
        image.src = item.image;

        let des = document.createElement("p");
        des.innerText = item.description;

        let category = document.createElement("h5");
        category.innerText = "Category:" + " " + item.category;

        let gender = document.createElement("p");
        gender.innerText = item.gender;

        let cost = document.createElement("h4");
        cost.innerText = "Price:" + " " + item.price;

        let edit = document.createElement("button");
        edit.innerText = "Edit";
        edit.setAttribute("class", "edit-button");

        let del = document.createElement("button");
        del.setAttribute("class", "delete-button");
        del.innerText = "Delete";

        let id = item._id;

        edit.addEventListener("click", function () {
            const card = edit.parentNode;
            const cardImage = card.querySelector("img").getAttribute("src");
            const cardContent = card.querySelector("p").textContent;
            const cardPrice = item.price;
            const cardTitle = card.querySelector("h1").textContent;

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

            const priceLabel = document.createElement("label");
            priceLabel.textContent = "Price:";
            form.appendChild(priceLabel);

            const priceInput = document.createElement("input");
            priceInput.setAttribute("type", "text");
            priceInput.setAttribute("value", cardPrice);
            form.appendChild(priceInput);

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
                    price: priceInput.value,
                    content: textarea.value,
                };
                try {
                    const response = await fetch(
                        `${BaseUrl}/services/male/update/${id}`,
                        {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formData),
                        }
                    );
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    const data = await response.json();
                    console.log(data); // log the response from the server

                    card.querySelector("img").setAttribute("src", formData.image);
                    card.querySelector("h1").textContent = formData.title;
                    card.querySelector("p").textContent = formData.content;
                    card.querySelector("h4").textContent = formData.price;

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
                const response = await fetch(
                    `${BaseUrl}/services/male/delete/${id}`,
                    {
                        method: "DELETE",
                    }
                );
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

        div.append(image, name, des, category, cost, gender, edit, del);
        document.getElementById("renderServices").append(div);
    });
}

function renderDoctors(data) {
    data.forEach((item) => {
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let name = document.createElement("h1");
        name.innerText = item.name;
        let email = document.createElement("p");
        email.innerText = item.email;

        let imageContainer = document.createElement("div");
        imageContainer.setAttribute("class", "image-container");
        let image = document.createElement("img");
        image.src = item.image;
        imageContainer.append(image);

        let salary = document.createElement("h5");
        salary.innerText = "Salary :" + item.salary;

        let edit = document.createElement("button");
        edit.innerText = "Edit";
        edit.setAttribute("class", "edit-button");

        let del = document.createElement("button");
        del.setAttribute("class", "delete-button");
        del.innerText = "Delete";

        let id = item._id;

        edit.addEventListener("click", function () {
            const card = edit.parentNode;
            const cardImage = card.querySelector("img").getAttribute("src");
            const cardSalary = item.salary;
            const cardEmail = card.querySelector("p").textContent;
            const cardTitle = card.querySelector("h1").textContent;

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

            const emailLabel = document.createElement("label");
            emailLabel.textContent = "Email:";
            form.appendChild(emailLabel);

            const emailInput = document.createElement("input");
            emailInput.setAttribute("type", "text");
            emailInput.setAttribute("value", cardEmail);
            form.appendChild(emailInput);

            const salaryLabel = document.createElement("label");
            salaryLabel.textContent = "Salary:";
            form.appendChild(salaryLabel);

            const salaryInput = document.createElement("input");
            salaryInput.setAttribute("type", "text");
            salaryInput.setAttribute("value", cardSalary);
            form.appendChild(salaryInput);

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
                    name: titleInput.value,
                    salary: salaryInput.value,
                    email: emailInput.value,
                };

                try {
                    const response = await fetch(
                        `${BaseUrl}/stylist/styler/update/${id}`,
                        {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formData),
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }

                    const data = await response.json();
                    console.log(data); // log the response from the server

                    card.querySelector("img").setAttribute("src", formData.image);
                    card.querySelector("h1").textContent = formData.title;
                    card.querySelector("h5").textContent = formData.salary;
                    card.querySelector("p").textContent = formData.email;

                    modal.remove();
                    alert("Stylists data has been modified successfully");
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
                const response = await fetch(
                    `${BaseUrl}/stylist/styler/delete/${id}`,
                    {
                        method: "DELETE",
                    }
                );
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

        div.append(imageContainer, name, email, salary, edit, del);
        document.getElementById("renderDoctors").append(div);
    });
}

// form logic
const addMaleForm = document.querySelector("#addmale form");
const addStylistsForm = document.querySelector("#addstylists form");

addMaleForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(addMaleForm);
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

    const response = await fetch(`${BaseUrl}/services/male/addMaleService`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });

    const result = await response.json();
    console.log(result);

    alert("Service added successfully");
    addMaleForm.reset();
});

addStylistsForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(addStylistsForm);
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

    const response = await fetch(
        `${BaseUrl}/stylist/styler/addStylistService`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        }
    );
    const result = await response.json();
    console.log(result);

    alert("Doctors added successfully");
    addStylistsForm.reset();
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