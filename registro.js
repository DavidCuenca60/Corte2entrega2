document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".registro-form");
  const btn = document.querySelector(".registro-btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const nickname = document.getElementById("nickname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const usuario = { nombre, nickname, email, password };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    localStorage.setItem("nombreUsuario", nickname);
    localStorage.setItem("nombreCompleto", nombre);
    localStorage.setItem("correoUsuario", email);
    localStorage.setItem("descripcionUsuario", "Escribe tu descripción");

    window.location.href = "Iniciar Sesión.html";
  });
});