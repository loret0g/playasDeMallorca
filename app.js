document.addEventListener('DOMContentLoaded', function() {
    const botonesLeerEntrada = document.querySelectorAll('.leer-entrada');

    botonesLeerEntrada.forEach(boton => {
        boton.addEventListener('click', function() {
            const textoEntrada = boton.previousElementSibling;
            const isExpanded = textoEntrada.classList.contains('mostrar-todo');

            if (isExpanded) {
                textoEntrada.classList.remove('mostrar-todo');
                boton.textContent = 'Leer entrada';
            } else {
                textoEntrada.classList.add('mostrar-todo');
                boton.textContent = 'Mostrar menos';
            }
        });
    });
});