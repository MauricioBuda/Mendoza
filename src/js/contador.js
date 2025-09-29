function startCountdown() {
  const targetDate = new Date("2025-11-28T00:00:00");
  const originalTitle = "Mendoza 2025 ♥"; // título original

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = targetDate.getTime() - now;

    if (timeRemaining <= 0) {
      document.getElementById("countdown").innerText = "¡Nos fuimooooo!";
      document.getElementById("countdown-title").innerText = "";
      document.title = "¡Nos fuimooooo!";
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Actualizar el HTML
    document.getElementById("countdown").innerHTML =
      `${days} días ${hours} hs ${minutes} m ${seconds} s`;

    // Actualizar título según el tiempo restante
    const titleEl = document.getElementById("countdown-title");

    if (days <= 3) {
      titleEl.innerText = "Ya nos vamos pitucaa!!";
    } else if (days <= 14) {
      titleEl.innerText = "Menos de dos semanas pituca!!";
    } else if (days <= 30) {
      titleEl.innerText = "Menos de un mes!!";
    } else {
      titleEl.innerText = "Paciencia ♥";
    }

    // Si la pestaña está inactiva, mostrar contador en el título
    if (document.hidden) {
      document.title = countdownText;
    } else {
      document.title = originalTitle;
    }
  };

  // Actualizar cada segundo
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Detectar cambios de visibilidad
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      // Al salir de la pestaña, mostrar el contador
      // Se actualiza cada segundo de todas formas
    } else {
      // Al volver, restaurar el título original
      document.title = originalTitle;
    }
  });
}

// Iniciar
startCountdown();
