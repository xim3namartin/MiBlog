const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelector(".nav-links")

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links_visible")
})

