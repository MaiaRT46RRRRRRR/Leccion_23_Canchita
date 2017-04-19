//Trayendonos los elementos que utilizaremos
var todo = document.getElementById("todo");
var padre1 = document.createElement("div");
var padre2 = document.createElement("div");

creando(padre1,"uno","padre1", "hijo11","hijom1" ,"dos","hijo12", "tres","hijo1");
creando(padre2,"uno","padre2", "hijo21","hijom2" ,"dos","hijo22", "tres","hijo2");


todo.appendChild(padre1);
todo.appendChild(padre2);

function creando(elem, clase ,id, hijo1,id1 ,clase1 ,hijo2, clase2 ,id2 ){
	elem.classList.add(clase);
	elem.setAttribute('id', id);
	var hijo1 = document.createElement("div");
	hijo1.classList.add(clase1);
	hijo1.setAttribute('id', id1)
	var hijo2 = document.createElement("div");
	hijo2.classList.add(clase2);
	hijo2.setAttribute('id', id2);
	elem.appendChild(hijo1);
	elem.appendChild(hijo2);
}