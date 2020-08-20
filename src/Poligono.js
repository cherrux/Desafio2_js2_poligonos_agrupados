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

//export poligono
export default Poligono

