// Obtener el botón de alternar modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');

// Verificar si el modo oscuro está activado previamente
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    document.querySelector('footer').classList.add('dark-mode');
    document.querySelectorAll('nav a').forEach(link => link.classList.add('dark-mode'));
    document.querySelectorAll('.product').forEach(product => product.classList.add('dark-mode'));
    document.querySelectorAll('button').forEach(button => button.classList.add('dark-mode'));
}

// Alternar entre modo claro y oscuro
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('nav a').forEach(link => link.classList.toggle('dark-mode'));
    document.querySelectorAll('.product').forEach(product => product.classList.toggle('dark-mode'));
    document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
    
    // Guardar la preferencia del modo en el almacenamiento local
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});
