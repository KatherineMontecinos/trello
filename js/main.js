function agregarLista() {
 // elemento que ya tenemos
  var agregar = document.getElementById('anadir');
// elementos que creamos
  var cont = document.createElement('form');
  var input = document.createElement('input');
  var boton = document.createElement('input');
  boton.setAttribute('type', 'submit');
// texto del boton
  var textoboton = document.createTextNode('Guardar');
  // metemos texto y atributo en boton
  boton.appendChild(textoboton);
  boton.setAttribute("class", "btn-warning");
  cont.setAttribute("onsubmit", "return guardar();");
  
  // unir al form con sus elementos input y boton
  cont.appendChild(input);
  cont.appendChild(boton);
  // unir el div general(agregar) a el contenedor
  agregar.appendChild(cont);
}
function guardar(){
  var agregar = document.getElementById('anadir');
  var escribir = document.getElementsByTagName('input')[0].value;
  var nodoescribir = document.createTextNode(escribir);
  
  var inputext = document.createElement('p');
  
  inputext.appendChild(nodoescribir);
  
  var tarjetaboton = document.createElement('button');
  var nodotarjeta = document.createTextNode('Agregar Tarjeta');
  tarjetaboton.appendChild(nodotarjeta);
  tarjetaboton.setAttribute("class", "btn-default");
  
  agregar.appendChild(inputext);
  agregar.appendChild(tarjetaboton);
 
  return false;
}













  