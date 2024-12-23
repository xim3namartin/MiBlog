

//Funcion para posicionarse en la seccion de todos los libros
document.getElementById('btn-todos').addEventListener('click', function () {
    const headerHeight = document.querySelector('.header').offsetHeight; // Obtener la altura del encabezado
    const todos_loslibros = document.getElementById('todos_loslibros').offsetTop - headerHeight; // Ajustar la posición

    // Desplazarse a la posición del elemento h3
    window.scrollTo({
        top: todos_loslibros,
        behavior: "smooth" // Desplazamiento suave
    });
});



//Funcion para posicionarse en la seccion de Mis favoritos
document.getElementById('btn-fav').addEventListener('click', function () {
    const headerHeight = document.querySelector('.header').offsetHeight; // Obtener la altura del encabezado
    const favoritos = document.getElementById('favoritos').offsetTop - headerHeight; // Ajustar la posición

    // Desplazarse a la posición del elemento h3
    window.scrollTo({
        top: favoritos,
        behavior: "smooth" // Desplazamiento suave
    });
});






//Funcion para mostrar la descripcion del libro
//  function toggleDescription() {
//      const description = document.querySelector('.description');
//      const button = document.querySelector('button');
//     if (description.style.display === 'none') {
//          description.style.display = 'block';
//          button.textContent = 'Ocultar Descripción';
//     } else {
//         description.style.display = 'none';
//         button.textContent = 'Mostrar Descripción';
//     }
//  }



document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.mesage-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.book-item');
            const description = item.querySelector('.description');

            // Ocultar todas las descripciones
            document.querySelectorAll('.description').forEach(desc => {
                desc.style.display = 'none';
            });

            // Mostrar la descripción de la tarjeta seleccionada
            description.style.display = 'block';
        });
    });
});
