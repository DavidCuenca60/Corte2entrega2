window.onload = function () {
  const nombre = localStorage.getItem("nombreUsuario") || "Nombre de Usuario";
  const nombrecompleto = localStorage.getItem("nombreCompleto") || "Nombre Completo";
  const correo = localStorage.getItem("correoUsuario") || "correo@example.com";
  const descripcion = localStorage.getItem("descripcionUsuario") || "Esta es tu descripción.";

  document.getElementById("nombre-usuario").value = nombre;
  document.getElementById("nombre-completo").value = nombrecompleto;
  document.getElementById("correo-usuario").value = correo;
  document.getElementById("descripcion-usuario").value = descripcion;

  document.getElementById("nombreus").textContent = nombre;

  document.getElementById("nombre-usuario").disabled = true;
  document.getElementById("nombre-completo").disabled = true;
  document.getElementById("correo-usuario").disabled = true;
  document.getElementById("descripcion-usuario").disabled = true;
};



function editarPerfil() {
  document.getElementById("nombre-usuario").disabled = false;
  document.getElementById("descripcion-usuario").disabled = false;
}




function guardarPerfil() {
  const nuevoNombre = document.getElementById("nombre-usuario").value.trim();
  const nuevoNombreCom = document.getElementById("nombre-completo").value.trim();
  const nuevoCorreo = document.getElementById("correo-usuario").value.trim();
  const nuevaDescripcion = document.getElementById("descripcion-usuario").value.trim();

  

  localStorage.setItem("nombreUsuario", nuevoNombre);
  localStorage.setItem("nombreCompleto", nuevoNombreCom);
  localStorage.setItem("correoUsuario", nuevoCorreo);
  localStorage.setItem("descripcionUsuario", nuevaDescripcion);

  document.getElementById("nombre-usuario").disabled = true;
  document.getElementById("nombre-completo").disabled = true;
  document.getElementById("correo-usuario").disabled = true;
  document.getElementById("descripcion-usuario").disabled = true;

  document.getElementById("nombreus").textContent = nuevoNombre;

  
}