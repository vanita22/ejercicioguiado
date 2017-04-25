function translate(email, password){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "correo electrónico";
	password.placeholder = "contraseña";
	remember.innerHTML = "recordar datos";
	button.innerHTML = "iniciar Sesión";
}

translate();

var boton = document.getElementById("claveCorreo");
	boton.addEventListener("click", function(evento){
    evento.preventDefault();
    var usuario = document.getElementById("correo");
    var clave = document.getElementById("clave");
    usuario.innerHTML = "El usuario registrado es: " + "<br>"+ document.getElementById("inputEmail").value;
    clave.innerHTML = "La clave ingresada es: " + "<br>"+ document.getElementById("inputPassword").value;
}
);




