const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menu");
    }else {
        navToggle.setAttribute("aria-label", "Abrir menu");
    }
});




//Funcion para posicionarse en las CARDS//
document.getElementById('btn-mas').addEventListener('click', function () {
    const headerHeight = document.querySelector('.header').offsetHeight; // Obtener la altura del encabezado
    const SeccionCards = document.getElementById('seccioncard').offsetTop - headerHeight; // Ajustar la posición

    // Desplazarse a la posición de la seccion de las tarjetas //
    window.scrollTo({
        top: SeccionCards,
        behavior: "smooth" // Desplazamiento suave
    });
});





//Funcion para BTN - BIBLIOTECA//


    document.getElementById('.btn-todos').addEventListener('click', function() {
        document.getElementById('todos').scrollIntoView({ behavior: 'smooth' });
    });



//Funcion SWIPER - BIBLIOTECA//

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

