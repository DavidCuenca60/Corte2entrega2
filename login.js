document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".registro-btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (
      usuarioGuardado &&
      email === usuarioGuardado.email &&
      password === usuarioGuardado.password
    ) {
      window.location.href = "Main_page.html";
    } else {
      window.location.href = "Error.html";
    }

    

  });
});


