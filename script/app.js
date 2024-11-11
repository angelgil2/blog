window.addEventListener('load', function() {
    const message = document.getElementById('message');
    const progressBar = document.getElementById('progress-bar');
    const checkIcon = document.getElementById('check-icon');

    // Mostrar el mensaje y animar la barra de progreso
    message.classList.add('show');
    
    // Reducir gradualmente el ancho de la barra de progreso
    progressBar.style.width = '0%';

    // Ocultar el mensaje y mostrar el icono de check después de 5 segundos
    setTimeout(() => {
      message.classList.remove('show');
      message.style.display = 'none';
      checkIcon.classList.add('show');

      // Ocultar el icono de check después de 2 segundos
      setTimeout(() => {
        checkIcon.classList.remove('show');
      }, 2000);
      
    }, 5000);
  });