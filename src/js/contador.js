function startCountdown() {
  // Fecha objetivo: sábado 28 de noviembre de 2025 a las 00:00:00
  const targetDate = new Date("2025-11-28T00:00:00");

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate.getTime() - now;

    if (timeRemaining <= 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerText = "¡Nos fuimooooo";
      document.getElementById("countdown-title").innerText = "";
      return;
    }

    // Calcular días, horas, minutos, segundos
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Mostrar en el HTML
    document.getElementById("countdown").innerHTML =
      `${days} días ${hours} hs ${minutes} m ${seconds} s`;

    // Cambiar el título según el tiempo restante
    const titleEl = document.getElementById("countdown-title");

    if (days <= 3) {
      titleEl.innerText = "Ya nos vamos pitucaa!!";
    } else if (days <= 14) {
      titleEl.innerText = "Menos de dos semanas pituca!!";
    } else if (days <= 30) {
      titleEl.innerText = "Menos de un mes!!";
    } else {
      titleEl.innerText = "Paciencia ♥"; // sin título si falta más de 2 semanas
    }
  }, 1000);
}

// Iniciar automáticamente
startCountdown();
