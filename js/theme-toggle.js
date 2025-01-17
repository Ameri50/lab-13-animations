// Función para alternar el tema
const themeToggleButton = document.getElementById('theme-toggle');

// Verificar si el usuario tiene una preferencia guardada para el modo oscuro
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

// Alternar el modo oscuro al hacer clic en el botón
themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Establecer el nuevo tema en el HTML
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Guardar la preferencia del usuario en localStorage
  localStorage.setItem('theme', newTheme);
});
