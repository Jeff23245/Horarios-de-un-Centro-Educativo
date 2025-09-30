
const horarios = {
   "Primero Año": [
    ["7:00 - 7:45", "Lenguaje", "Matemáticas", "Sociales", "Ciencias", "Inglés"],
    ["7:45 - 8:30", "Lenguaje", "Matemáticas", "Sociales", "Ciencias", "Inglés"],
    ["8:30 - 8:45", "Receso", "Receso", "Receso", "Receso", "Receso"],
    ["8:45 - 9:30", "Sociales", "Inglés", "Matemáticas", "Física", "Ciencias"],
    ["9:30 - 10:15", "Sociales", "Inglés", "Matemáticas", "Física", "Ciencias"],
    ["10:15 - 10:30", "Receso", "Receso", "Receso", "Receso", "Receso"],
    ["10:30 - 11:15", "Matemáticas", "Ciencias", "Lenguaje", "Inglés", "Física"],
    ["11:15 - 12:00", "Matemáticas", "Ciencias", "Lenguaje", "Inglés", "Física"],
    ["12:00 - 1:00", "Almuerzo", "Almuerzo", "Almuerzo", "Almuerzo", "Almuerzo"],
    ["1:00 - 1:45", "Arte", "Lenguaje", "Sociales", "Matemáticas", "Computación"],
    ["1:45 - 2:30", "Arte", "Lenguaje", "Sociales", "Matemáticas", "Computación"],
    ["2:30 - 3:15", "Deporte", "Cívica", "Inglés", "Ciencias", "Matemáticas"],
    ["3:15 - 4:00", "Deporte", "Cívica", "Inglés", "Ciencias", "Matemáticas"],
    ["4:00 - 4:45", "Computación", "Física", "Lenguaje", "Sociales", "Arte"],
    ["4:45 - 5:30", "Computación", "Física", "Lenguaje", "Sociales", "Arte"],
    ["5:30 - 6:00", "Revisión", "Revisión", "Revisión", "Revisión", "Revisión"],
  ],
  "Segundo Año": [
    ["7:00 - 7:45", "Matemática", "Horas sociales", "Sociales", "Ciencias", "Inglés"],
    ["7:45 - 8:30", "Matemática", "Matematicas", "Lenguaje", "Matematicas", "Inglés"],
    ["8:30 - 8:45", "Receso", "Receso", "Receso", "Receso", "Receso"],
    ["8:45 - 9:30", "Sociales", "Inglés", "Sociales", "Emprendedurismo", "Ciencias"],
    ["9:30 - 10:15", "Sociales", "Inglés", "Sociales", "Emprendedurismo", "Ciencias"],
    ["10:15 - 10:30", "Receso", "Receso", "Receso", "Receso", "Receso"],
    ["10:30 - 11:15", "Física", "Lenguaje", "Ciencias", "Sociales", "Inglés"],
    ["11:15 - 12:00", "Física", "Lenguaje", "Ciencias", "Sociales", "Inglés"],
    ["12:00 - 1:00", "Almuerzo", "Almuerzo", "Almuerzo", "Almuerzo", "Almuerzo"],
    ["1:00 - 1:45", "Arte", "Sociales", "Matemáticas", "Ciencias", "Computación"],
    ["1:45 - 2:30", "Arte", "Sociales", "Matemáticas", "Ciencias", "Computación"],
    ["2:30 - 3:15", "Deporte", "Cívica", "Lenguaje", "Física", "Matemáticas"],
    ["3:15 - 4:00", "Deporte", "Cívica", "Lenguaje", "Física", "Matemáticas"],
    ["4:00 - 4:45", "Computación", "Ciencias", "Inglés", "Sociales", "Arte"],
    ["4:45 - 5:30", "Computación", "Ciencias", "Inglés", "Sociales", "Arte"],
    ["5:30 - 6:00", "Revisión", "Revisión", "Revisión", "Revisión", "Revisión"],
  ],
 "Tercer Año": [
    ["7:00 - 7:45", "Física", "Ciencias", "Lenguaje", "Matemáticas", "Sociales"],
    ["7:45 - 8:30", "Física", "Ciencias", "Lenguaje", "Matemáticas", "Sociales"],
    ["8:30 - 8:45", "Receso", "Receso", "Receso", "Receso", "Receso"],
    ["8:45 - 9:30", "Matemáticas", "Inglés", "Ciencias", "Lenguaje", "Física"],
    ["9:30 - 10:15", "Matemáticas", "Inglés", "Ciencias", "Lenguaje", "Física"],
    ["10:15 - 10:30", "Receso", "Receso", "Receso", "Receso", "Receso"],
    ["10:30 - 11:15", "Sociales", "Computación", "Física", "Ciencias", "Lenguaje"],
    ["11:15 - 12:00", "Sociales", "Computación", "Física", "Ciencias", "Lenguaje"],
    ["12:00 - 1:00", "Almuerzo", "Almuerzo", "Almuerzo", "Almuerzo", "Almuerzo"],
    ["1:00 - 1:45", "Arte", "Lenguaje", "Matemáticas", "Cívica", "Inglés"],
    ["1:45 - 2:30", "Arte", "Lenguaje", "Matemáticas", "Cívica", "Inglés"],
    ["2:30 - 3:15", "Deporte", "Ciencias", "Sociales", "Física", "Matemáticas"],
    ["3:15 - 4:00", "Deporte", "Ciencias", "Sociales", "Física", "Matemáticas"],
    ["4:00 - 4:45", "Computación", "Lenguaje", "Cívica", "Arte", "Ciencias"],
    ["4:45 - 5:30", "Computación", "Lenguaje", "Cívica", "Arte", "Ciencias"],
    ["5:30 - 6:00", "Revisión", "Revisión", "Revisión", "Revisión", "Revisión"],
  ]
};

function mostrarHorario(anio) {
  const tabla = document.getElementById("tabla-horario");
  tabla.innerHTML = ""; // limpiar tabla antes de renderizar

  const header = `
    <tr>
      <th>Hora</th>
      <th>Lunes</th>
      <th>Martes</th>
      <th>Miércoles</th>
      <th>Jueves</th>
      <th>Viernes</th>
    </tr>
  `;
  tabla.innerHTML += header;

  horarios[anio].forEach(fila => {
    let row = "<tr>";
    fila.forEach(celda => {
      row += `<td>${celda}</td>`;
    });
    row += "</tr>";
    tabla.innerHTML += row;
  });
}


document.getElementById("grupo").addEventListener("change", function () {
  mostrarHorario(this.value);
});

mostrarHorario("Segundo Año");
