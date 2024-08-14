const form = document.querySelector('#form') as HTMLFormElement;

// Interface
interface RegistroInterface {
  id: number,
  nombre: string,
  materia: string,
  notas: number[],
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Variables
  const nombre = document.querySelector('#nombre') as HTMLInputElement;
  const materia = document.querySelector('#materia') as HTMLInputElement;
  const nota1 = document.querySelector('#nota1') as HTMLInputElement;
  const nota2 = document.querySelector('#nota2') as HTMLInputElement;
  const nota3 = document.querySelector('#nota3') as HTMLInputElement;
  const nota4 = document.querySelector('#nota4') as HTMLInputElement;
  let contador: number = 0;

  const registro: RegistroInterface = {
    id: contador += 1,
    nombre: nombre.value,
    materia: materia.value,
    notas: [
      parseFloat(nota1.value),
      parseFloat(nota2.value),
      parseFloat(nota3.value),
      parseFloat(nota4.value)
    ]
  }

  // Obtener los registros ya guardados en localStorage
  const storedRegistros = JSON.parse(localStorage.getItem("registros") || "[]");
  //console.log(storedRegistros);

  // Añadir el nuevo registro a la lista
  storedRegistros.push(registro);

  // Guardar de nuevo en localStorage
  localStorage.setItem("registros", JSON.stringify(storedRegistros));

  // Redireccionar a tabla.html
  window.location.href = "tabla.html";
});

