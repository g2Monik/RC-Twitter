//Declarampos Variables
var button = document.getElementById('button');

button.addEventListener('click', function(){
	var comments = document.getElementById('comment').value;
	//limpiar textarea
	document.getElementById('comment').value = '';
	//contenedor
	var cont = document.getElementById('cont');
	//Div para comentarios
	var newComments = document.createElement('div');
	//sin mensajes vacios
  if(comments.length == 0 || comments == null) {
		document.getElementById("button").disabled = true;
	}

   document.getElementById('comment').onkeyup = function () {
   document.getElementById('count').innerHTML = "Characters left: " + (140 - this.value.length);
  };
	var textNewComment = document.createTextNode(comments);
	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(contenedorElemento);
	cont.appendChild(newComments);
})

var caracteres = document.getElementById("caracteres");
var mensaje = document.getElementById("comment");
var cont = 140;
caracteres.innerHTML = cont;
function cambiaMensaje(evento) {
cont = 140 - evento.target.value.length;
  caracteres.innerHTML = cont;
  caracteres.style.color = "black";
  mensaje.style.color = "black";
  if (cont <= 20) {
    caracteres.style.color = "green";
  }
  if (cont <= 10) {
    caracteres.style.color = "pink";
  }
  if (cont < 0) {
    caracteres.style.color = "red";
    document.getElementById("button").disabled = true;
  }
}
