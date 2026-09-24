/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* Close mobile menu after clicking */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


/* =========================================
   PROFILE IMAGE
========================================= */

const imageInput = document.getElementById("imageInput");
const profileImage = document.getElementById("profileImage");
const imagePlaceholder = document.getElementById("imagePlaceholder");
const removeImage = document.getElementById("removeImage");


imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Please choose an image file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        profileImage.src = event.target.result;

        profileImage.style.display = "block";
        imagePlaceholder.style.display = "none";

    };

    reader.readAsDataURL(file);

});


/* =========================================
   REMOVE IMAGE
========================================= */

removeImage.addEventListener("click", () => {

    profileImage.src = "";

    profileImage.style.display = "none";
    imagePlaceholder.style.display = "flex";

    imageInput.value = "";

});