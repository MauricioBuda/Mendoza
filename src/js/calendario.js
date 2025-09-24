// Fechas de las vacaciones
const fechas = [
  '2025-11-29', // sábado
  '2025-11-30',
  '2025-12-01',
  '2025-12-02',
  '2025-12-03',
  '2025-12-04',
  '2025-12-05',
  '2025-12-06'  // sábado
];

const calendario = document.getElementById('calendario');

// fechas.forEach(fechaStr => {
//   const date = new Date(fechaStr);
//   const options = { weekday: 'long', day: 'numeric', month: 'long' };
//   const nombreDia = date.toLocaleDateString('es-ES', options);

//   const diaDiv = document.createElement('div');
//   diaDiv.className = 'dia';

//   const titulo = document.createElement('h2');
//   titulo.textContent = nombreDia;
//   diaDiv.appendChild(titulo);

//   const actividadesDiv = document.createElement('div');
//   actividadesDiv.className = 'actividades';
//   diaDiv.appendChild(actividadesDiv);

//   // Ejemplo de actividad
//   const actividad = document.createElement('div');
//   actividad.textContent = "Agregar actividad aquí";
//   actividad.style.fontSize = '14px';
//   actividad.style.color = '#333';
//   actividadesDiv.appendChild(actividad);

//   calendario.appendChild(diaDiv);
// });
