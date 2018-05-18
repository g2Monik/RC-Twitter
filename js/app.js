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

	var textNewComment = document.createTextNode(comments);
	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments);

})
