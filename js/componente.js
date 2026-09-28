/*
if(document.getElementById("btnModal")){
	var modal = document.getElementById("myModal");
	var btn = document.getElementById("btnModal");
	var span = document.getElementsByClassName("close")[0];
	var body = document.getElementsByTagName("body")[0];

	btn.onclick = function() {
		modal.style.display = "block";

		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";
	}

	span.onclick = function() {
		modal.style.display = "none";

		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
		modal.style.display = "none";

		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
		}
	}
}
*/

function Convertir(){
	var num1 = document.getElementById("num1").value;

	if (num1 == ""){
		alert('¡Tienes que introducir un número!');
		return;
	}

		else if (num1 < 0) {
			alert('¡El número tiene que ser positivo!')
			return;
		}

		else {
			var num2 = parseFloat(num1) * 9;
			document.getElementById("num2").value = num2;
		}
}

/*<--- ABRIR EL MODAL CON EL BOTÓN --->*/

const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";
for(const el of openEls) {
	el.addEventListener("click", function() {
		const modalId = this.dataset.open;
		document.getElementById(modalId).classList.add(isVisible);
	});
}

/*<--- SALIR DANDO UN CLICK EN LA X --->*/

const closeEls = document.querySelectorAll("[data-close]");
for (const el of closeEls) {
	el.addEventListener("click", function() {
		this.parentElement.parentElement.parentElement.classList.remove(isVisible);
	});
}

/*<--- SALIR PULSANDO CUALQUIER PARTE DE LA PANTALLA --->*/

document.addEventListener("click", e => {
	if (e.target == document.querySelector(".modal.is-visible")) {
		document.querySelector(".modal.is-visible").classList.remove(isVisible);
	}
});

/*<--- SALIR CON LA TECLA ESC --->*/

document.addEventListener("keyup", e => {
	if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
		document.querySelector(".modal.is-visible").classList.remove(isVisible);
	}
});