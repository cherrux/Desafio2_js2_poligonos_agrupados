import Poligono from './Poligono' 


const rectangulo = {

  area () {
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return base * altura
  },

  perimetro (){
    let base = Poligono.valores()[0]
    let altura = Poligono.valores()[2]
    return 2 * base + 2 * altura
  }

}


export default rectangulo
