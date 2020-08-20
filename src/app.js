
// import $ from 'jquery';
// import { v4 } from 'uuid/';

//import formulas
import poligonos from './Poligono'
import circulo from './Circulo'
import decagono from './Decagono'
import octagono from './Octagono'
import rectangulo from './Rectangulo'
import triangulo from './Triangulo'

import './style.scss';


const selector = document.getElementsByTagName('select')[0];

selector.addEventListener('change', function (e) {
  console.log(poligonos.getValues())
  let poligono = e.target.value
  if (poligono === 'circulo') {
    console.log(`Perimetro del Circulo ===> ${circulo.perimetro()}`)
    console.log(` Area del Circulo ===> ${circulo.area()}`)

    //Mostrar en DOM
    document.getElementById("resultado").innerHTML += `<p>Perimetro del Circulo: ${circulo.perimetro()}</p>`;
    document.getElementById("resultado").innerHTML += `<p>Area del Circulo: ${circulo.area()}</p>`;
  }
  if (poligono === 'triangulo') {
    console.log(`Perimetro del Triangulo ===> ${triangulo.perimetro()}`)
    console.log(`Area del Triangulo ===> ${triangulo.area()}`)
    //Mostrar en DOM
    document.getElementById("resultado").innerHTML += `<p>Perimetro del Triangulo: ${triangulo.perimetro()}</p>`;
    document.getElementById("resultado").innerHTML += `<p>Area del Triangulo: ${triangulo.area()}</p>`;
  }
  if (poligono === 'rectangulo') {
    console.log(`Perimetro del Rectangulo ===> ${rectangulo.perimetro()}`)
    console.log(`Area del Rectangulo ===> ${rectangulo.area()}`)
    //Mostrar en DOM
    document.getElementById("resultado").innerHTML += `<p>Perimetro del Rectangulo: ${rectangulo.perimetro()}</p>`;
    document.getElementById("resultado").innerHTML += `<p>Area del Rectangulo: ${rectangulo.area()}</p>`;

  }
  if (poligono === 'decagono') {
    console.log(`Perimetro del Decagono ===> ${decagono.perimetro()}`)
    console.log(`Area del Decagono ===> ${decagono.area()}`)
    //Mostrar en DOM
    document.getElementById("resultado").innerHTML += `<p>Perimetro del Decagono: ${decagono.perimetro()}</p>`;
    document.getElementById("resultado").innerHTML += `<p>Area del Decagono: ${decagono.area()}</p>`;
  }
  if (poligono === 'octagono') {
    console.log(`Perimetro del Octagono ===> ${octagono.perimetro()}`)
    console.log(`Area del Octagono ===> ${octagono.area()}`)
  }



})
