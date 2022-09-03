const h1 = document.querySelector('h1');
const form = document.querySelector('#form'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event) {
//   // console.log({event});
//   event.preventDefault();
//   const sumaInputs = input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
//   console.log({event});
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}

// console.log(input.value);
// console.log({
//     h1,
//     p,
//     parrafo,
//     id,
//     input,
// });

// // h1.innerHTML='Joaquin <br> Lo lograras';
// // h1.innerText='Joaquin <br> Lo lograras';

// //La forma para modificar una atributo es con:
// //Nos ayuda a a leer los atribustos que tiene nuestro elemento 
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class','rojo');

// //Agregar attributos
// /*h1.classList.add('rojo');
// h1.classList.remove('verde');
// h1.classList.toggle('verde');*/

// /**********************ModificarElInput*****************************/
// input.value = "123";

// /*********************CrearUnElementoDesdeCero***************************/
// const img = document.createElement('img');
// img.setAttribute('src','https://www.tutorialrepublic.com/lib/images/javascript-illustration.png')
// console.log(img);
// p.innerHTML = "";
// p.appendChild(img);
// //Nos ayuda a crear el elemento HTML que necesitemas


