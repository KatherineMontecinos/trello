function agregarLista() {
  // elemento que ya tenemos
  var agregar = document.getElementById('anadir');
  // elementos que creamos
  var cont = document.createElement('div');
  var input = document.createElement('input');
  var boton = document.createElement('button');
  // texto del boton
  var textoboton = document.createTextNode('Guardar');
  // metemos texto y atributo en boton
  boton.appendChild(textoboton);
  boton.setAttribute("class", "btn-warning");
  // llamamos a la funcion del boton guadar
  boton.setAttribute("onclick", "return guardar();");
  // unir al form con sus elementos input y boton
  cont.appendChild(input);
  cont.appendChild(boton);
  // unir el div general(agregar) a el contenedor
  agregar.appendChild(cont);
}

function guardar(){
  // elementos que ya tenemos
  var agregar = document.getElementById('anadir');
  // elemento para rescatar el valor del input
  var escribir = document.getElementsByTagName('input')[0].value;
  // lo que va dentro del input
  var nodoescribir = document.createTextNode(escribir);
  // elemento que creamos donde va ir lo que ingresamos en el input
  var inputext = document.createElement('p');
  // unimos el input con lo que se ingresa
  inputext.appendChild(nodoescribir);
  // creamos el boton 
  var tarjetaboton = document.createElement('button');
  // texto del boton 
  var nodotarjeta = document.createTextNode('Agregar Tarjeta');
  // unimos el boton con su texto y le damos una clase
  tarjetaboton.appendChild(nodotarjeta);
  tarjetaboton.setAttribute("class", "btn-default");
  // unimos el div general con sus hijos, los elementos que creamos
  agregar.appendChild(inputext);
  agregar.appendChild(tarjetaboton);
 
}















  