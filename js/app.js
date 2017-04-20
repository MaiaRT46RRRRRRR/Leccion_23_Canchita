//Trayendonos los elementos que utilizaremos
var todo = document.getElementById("todo");
var padre = document.createElement("div");
	padre.classList.add("padre");
	padre.setAttribute('id', "padre");
var hijo = document.createElement("div");
	hijo.classList.add("hijo");
	hijo.setAttribute('id', "hijo");


var id=["arco1","medio","arco2"];

for(var i=0; i<3;i++){
	creando(hijo ,id[i]);
}

padre.appendChild(hijo);	
todo.appendChild(padre);

function creando(elem,  carac1 ){
	var cara = document.createElement("div");
	cara.classList.add(carac1);
	cara.setAttribute('id', carac1);

	var cara1 = document.createElement("div");
	cara1.classList.add("jugador");

	cara.appendChild(cara1);
	elem.appendChild(cara);
}