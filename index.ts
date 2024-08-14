// Variables
const nombre = document.querySelector('#nombre') as HTMLInputElement;
const materia = document.querySelector('#materia') as HTMLInputElement;
const nota1 = document.querySelector('#nota1') as HTMLInputElement;
const nota2 = document.querySelector('#nota2') as HTMLInputElement;
const nota3 = document.querySelector('#nota3') as HTMLInputElement;
const nota4 = document.querySelector('#nota4') as HTMLInputElement;

const formulario = document.querySelector('#form') as HTMLFormElement;
let contador: number = 0;

// Interface
interface RegistroInterface {
  id: number,
  nombre: string,
  materia: string,
  notas: number[],
}
formulario.addEventListener('submit', event => {
  event.preventDefault();
  
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

  muestraRegistro(registro);

  // Resetea formulario
  setTimeout(() => {
    formulario.reset();
  }, 3000);
});

// Funcion que renderiza o muestra los datos del formulario en la tabla
const muestraRegistro = (r: RegistroInterface) => {
  const fila = document.createElement("tr");

  const id = document.createElement("td");
  id.innerHTML = r.id.toString();

  const nombre = document.createElement("td");
  nombre.innerHTML = r.nombre;

  const materia = document.createElement("td");
  materia.innerHTML = r.materia;

  const nota1 = document.createElement("td");
  nota1.innerHTML = r.notas[0].toString();

  const nota2 = document.createElement("td");
  nota2.innerHTML = r.notas[1].toString();

  const nota3 = document.createElement("td");
  nota3.innerHTML = r.notas[2].toString();

  const nota4 = document.createElement("td");
  nota4.innerHTML = r.notas[3].toString();

  const total = document.createElement("td");
  total.innerHTML = promedio().toString();

  const status = document.createElement("td");
  status.innerHTML = estatus();

  fila.appendChild(id);
  fila.appendChild(nombre);
  fila.appendChild(materia);
  fila.appendChild(nota1);
  fila.appendChild(nota2);
  fila.appendChild(nota3);
  fila.appendChild(nota4);
  fila.appendChild(total);
  fila.appendChild(status);

  const tBody = document.querySelector("tbody")!;
  tBody.appendChild(fila);
  //tBody.prepend(fila);
};

const promedio = (): number => {
  const promedio = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value) + parseFloat(nota4.value)) / 4;
  return Number(promedio.toFixed(2));
};

const estatus = (): string => {
  return promedio() >= 6 ? "Aprobado" : "Reprobado";
};