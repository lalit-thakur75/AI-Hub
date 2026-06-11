// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Mobile menu auto close

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =========================
// SEARCH FUNCTION
// =========================

const searchInput =
document.getElementById("searchInput");

const cards =
document.querySelectorAll(".tool-card");

searchInput.addEventListener("keyup", () => {

    const searchValue =
    searchInput.value.toLowerCase();

    cards.forEach(card => {

        const text =
        card.textContent.toLowerCase();

        if(text.includes(searchValue)){
            card.style.display = "";
        }
        else{
            card.style.display = "none";
        }

    });

});


// =========================
// CATEGORY FILTER
// =========================
const filterButtons =
document.querySelectorAll(".filter-btn");
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
        button.innerText.trim().toLowerCase();

        cards.forEach(card => {

            const badge =
            card.querySelector(".badge")
            .innerText.trim()
            .toLowerCase();

            if (
                category === "all" ||
                badge === category
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});

// =========================
// CONTACT FORM
// =========================

const form =
document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name =
    document.getElementById("name")
    .value.trim();

    const email =
    document.getElementById("email")
    .value.trim();

    const message =
    document.getElementById("message")
    .value.trim();

    if(name === "" ||
       email === "" ||
       message === "")
    {
        alert("Please fill all fields.");
        return;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email))
    {
        alert("Please enter a valid email.");
        return;
    }

    alert("Message Sent Successfully 🚀");

    form.reset();

});


// =========================
// DYNAMIC YEAR
// =========================

document.getElementById("year")
.textContent =
new Date().getFullYear();


// =========================
// ACTIVE NAVBAR
// =========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(window.scrollY >= sectionTop)
        {
            currentSection =
            section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + currentSection
        ){
            link.classList.add("active");
        }

    });

});


// =========================
// HERO BUTTON SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// =========================
// PAGE LOADED
// =========================

window.addEventListener("load", () => {

    console.log("AI Hub Loaded Successfully 🚀");

});

// =========================
//LOGIN
// =========================

const signinBtn =
document.getElementById("signinBtn");

const loginModal =
document.getElementById("loginModal");

const closeBtn =
document.getElementById("closeBtn");

const loginSubmit =
document.getElementById("loginSubmit");

signinBtn.addEventListener("click", () => {

    loginModal.style.display = "flex";

});

closeBtn.addEventListener("click", () => {

    loginModal.style.display = "none";

});

loginSubmit.addEventListener("click", () => {

    const email =
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

    if(email === "" || password === "")
    {
        alert("Please fill all fields");
        return;
    }

    alert("Login Successful 🚀");

    loginModal.style.display = "none";

});