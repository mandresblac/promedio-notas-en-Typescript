// Este archivo se encargará de recuperar los datos almacenados en localStorage y mostrarlos en la tabla.

window.addEventListener("DOMContentLoaded", () => {
  // Obtener los registros ya guardados en localStorage
  const storedRegistros = JSON.parse(localStorage.getItem("registros") || "[]");
  console.log(storedRegistros);

  // Capturamos la tabla del Html
  const table = document.querySelector("#table") as HTMLTableElement;

  storedRegistros.forEach((registro: {id: number; nombre: string; materia: string; notas: number[]}) => {
    const row = table.insertRow(); //insertRow(): Agrega una nueva fila (<tr>) a la tabla, y puede especificar la posición donde debe ser insertada.

    // Insertamos celdas en la nueva fila
    const cellId = row.insertCell(0); // insertCell() agrega una nueva celda (<td>) a una fila (<tr>) y también puede especificar posición dentro de la fila
    const cellNombre = row.insertCell(1);
    const cellMateria= row.insertCell(2);
    const cellNota1= row.insertCell(3);
    const cellNota2= row.insertCell(4);
    const cellNota3= row.insertCell(5);
    const cellNota4= row.insertCell(6);
    const cellTotal= row.insertCell(7);
    const cellStatus= row.insertCell(8);
    const cellAccion= row.insertCell(9);

    // Asignar valores a las celdas
    cellId.innerHTML = registro.id.toString();
    cellNombre.innerHTML = registro.nombre;
    cellMateria.innerHTML = registro.materia;
    cellNota1.innerHTML = registro.notas[0].toString();
    cellNota2.innerHTML = registro.notas[1].toString();
    cellNota3.innerHTML = registro.notas[2].toString();
    cellNota4.innerHTML = registro.notas[3].toString();

    // Calcula promedio
    const promedio = (registro.notas[0] + registro.notas[1] + registro.notas[2] + registro.notas[3]) / 4;

    cellTotal.innerHTML = promedio.toFixed(1).toString();

    if (promedio >= 6) {
      cellStatus.innerHTML =  "Aprobo"
      cellStatus.style.color = "green";
      cellStatus.style.fontWeight = "bold";
    } else {
      cellStatus.innerHTML = "Reprobo"
      cellStatus.style.color = "red";
      cellStatus.style.fontWeight = "bold";
    }

    // Creamos botón de Bootstrap para eliminar un registro
    const button = document.createElement("button");
    button.className = "btn btn-danger"; // Clases de Bootstrap
    button.textContent = "Eliminar";

    // Insertamos el botón en la celda
    cellAccion.appendChild(button);

    // Añadimos evento al botón de eliminar para borrar un registro
    button.addEventListener("click", () => {
      // Borrar el registro de localStorage
      storedRegistros.splice(storedRegistros.indexOf(registro), 1);
      localStorage.setItem("registros", JSON.stringify(storedRegistros));

      // Refrescar la página para mostrar los cambios
      window.location.reload();
    });
  })

});

