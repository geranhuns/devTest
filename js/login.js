const token = localStorage.getItem("token");

if (token) {
  document.getElementById("hide1").style.display = "none";
  document.getElementById("hide2").style.display = "none";
}

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passInput").value;

    if (email.trim() === "" || password.trim() === "") {
      if (email.trim() === "") {
        document.getElementById("emailFieldError").innerHTML =
          "Ingresa un email";
      } else {
        document.getElementById("emailFieldError").innerHTML = "";
      }

      if (password.trim() === "") {
        document.getElementById("passFieldError").innerHTML =
          "Ingresa una contraseña";
      } else {
        document.getElementById("passFieldError").innerHTML = "";
      }

      event.preventDefault();
    } else {
      const token = "123123123";
      localStorage.setItem("token", token);
      window.open("../index.html", "_self");
      event.preventDefault();
    }
  });
