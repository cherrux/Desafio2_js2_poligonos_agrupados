// object poligono load data
let Poligono = {
  //method values data
  getValues: function(){
  let base = parseInt(document.getElementById('base').value) || null
  let lado = parseInt(document.getElementById('lado').value) || null
  let altura = parseInt(document.getElementById('altura').value) || null
  let apotema = parseInt(document.getElementById('apotema').value) || null
  let radio = parseInt(document.getElementById('radio').value) || null
  return [base, lado, altura, apotema, radio]
  },

  // method return values data
  valores: function (){
    return this.getValues();
  }

}

//clase heredador
function Poligono2(base, lado, altura, apotema, radio) {
//herederos
  Circulo.call(this, radio)
  Decagono.call(this, lado, apotema)
  Octagono.call(this, lado, apotema)
  Rectangulo.call(this, base, altura)
  Rectangulo.call(this, base, altura.lado)
  // this.decagono2 = {
  //   nombrePila,
  //   apellido
  // };
  this.base = base;
  this.lado = lado;
  this.altura = altura;
  this.apotema = apotema;
  this.radio = radio;
};

function Profesor(nombrePila, apellido, edad, genero, intereses, materia) {
  Person.call(this, nombrePila, apellido, edad, genero, intereses);

  this.materia = materia;
}




//export poligono
export default Poligono

