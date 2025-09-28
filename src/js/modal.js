import confetti from 'canvas-confetti';

// Seleccionamos todos los días
const dias = document.querySelectorAll('.div-calendario .dia');

// Seleccionamos modal y sus elementos
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalActividades = document.getElementById('modal-actividades');
const cerrarBtn = document.querySelector('.cerrar');

// Datos detallados por día (puedes editar estos)
const detallesDias = {
  "Sábado 29": [
    "Salimos entre 08 y 09 de la mañana para Villa Mercedes (aprox 8hs de manejo)",
    "Villa Mercedes queda en San Luis, en Europa 261. El check in es a las 15 hs y check out 11 hs",
    "El alojamiento cuenta con sábanas!",
    "Cenaríamos en el hotel",
  ],
  "Domingo 30": [
    "Salimos hacia Mendoza. Restan unas 4 o 5 hs de manejo",
    "El alojamiento queda en Calle 2, manzana 5, lote 8, Potrerillos",
    "También cuenta con sábanas!",
    "Hacer la compra general, incluído lo que comen las fieras",
    "Cenamos en el hotel"
  ],
  "Lunes 1": [
    "Día libre!",
    "Recorrer pueblito!",
    "Disfrutar con niños",
  ],
  "Martes 2": [
    "Desayunamos en casita",
    "Degustación de aceites a las 11.30 hs (1 hora y medida aprox de viaje)",
    "Almorzamos 12.30hs en Laur",
    "Termas de Cacheuta 15 hs (1 hs de viaje)",
    "Volvemos a la casita (40 min de viaje)"
  ],
  "Miércoles 3": [
    "Desayuno en la casita",
    "Rafting 11 hs. Hay que llegar 10.30 hs (30 min de viaje)",
    "Llevar ropa seca, toallón, shampoo, jabón, etc",
    "Ir para el centro a recorrer y almorzar (1 hs de viaje)",
    "Volvemos a la casita y cenamos ahí"
  ],
  "Jueves 4": [
    "Día libre!",
    "Armar las valijas lamentablemente rosita"
  ],
  "Viernes 5": [
    "Check out de la casita 11 hs",
    "Salimos para Rufino, Santa Fé (8 hs aprox de viaje)",
    "El alojamiento queda en José ingenieros 50. Check out a las 12 hs"
  ],
  "Sábado 6": [
    "Arrancamos viaje para nuestro cuchitril!!",
    "Ver que vamos a comer",
  ],
};

// Abrir modal al hacer click en un día
dias.forEach(dia => {
  dia.addEventListener('click', () => {
    const titulo = dia.querySelector('h2').textContent.trim();
    console.log(titulo.substring(0, 6));
    modalTitulo.textContent = titulo;

    // Limpiar actividades previas
    modalActividades.innerHTML = "";

    // Mostrar actividades detalladas
    const actividades = detallesDias[titulo] || [];
    actividades.forEach(act => {
      const div = document.createElement('div');
      div.textContent = act;
      div.style.marginBottom = "8px";
      modalActividades.appendChild(div);
    });

    // Mostrar modal
    modal.style.display = "flex";
  });






  
// Función confeti

dia.addEventListener('click', () => {
  const titulo = dia.querySelector('h2').textContent.trim();
  modalTitulo.textContent = titulo;

  modalActividades.innerHTML = "";
  const actividades = detallesDias[titulo] || [];
  actividades.forEach(act => {
    const div = document.createElement('div');
    div.textContent = act;
    div.style.marginBottom = "8px";
    modalActividades.appendChild(div);
  });

  modal.style.display = "flex";

  // Lanzar confeti cada vez que se abre
  lanzarConfeti();
});





// CONFETI

function lanzarConfeti() {
  const duration = 6 * 1000; // Duración total en ms
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 2000 };

  const colors = ['#ff0a54', '#5647ffff', '#FF1493', '#ffffffff', '#99FF99', '#000000ff', '#ffe066', '#00b4d8', '#f6ff00ff'];

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 10 + Math.floor(Math.random() * 10);

    // Lanzar confeti desde posiciones aleatorias a lo ancho
    confetti(Object.assign({}, defaults, {
      particleCount,
      colors,
      origin: { x: Math.random(), y: Math.random() * 0.9 } // empieza desde arriba hasta 60% del alto
    }));
  }, 250);
}





});

// Cerrar modal al tocar la X
cerrarBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer click afuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});




