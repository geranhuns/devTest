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
/*
document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passInput").value;

    if (email.trim() === "" && password.trim() === "") {
      document.getElementById("emailFieldError").innerHTML = "Ingresa un email";
      document.getElementById("passFieldError").innerHTML =
        "Ingresa una contraseña";
      event.preventDefault();
    } else if (email.trim() === "" && password.trim() != "") {
      document.getElementById("emailFieldError").innerHTML = "Ingresa un email";
      event.preventDefault();
    } else if (password.trim() === "" && email.trim() != "") {
      document.getElementById("passFieldError").innerHTML =
        "Ingresa una contraseña";
      event.preventDefault();
    } else if (password.trim() != "" && email.trim() != "") {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNhcmxvcyBIZXJtb3NpbGxvIiwiaWF0IjoxNTE2MjM5MDIyfQ.Dwj6NgrYTWfePd_9Y_4a77zrxY-u78g3PY_but6Ng8c";

      localStorage.setItem("token", token);

      window.open("index.html", "_self");

      event.preventDefault();
    }
  });

/*let emailValidation = document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    let email = document.getElementById("emailInput").value;

    if (email.trim() == "") {
      document.getElementById("emailFieldError").innerHTML = "Ingresa un email";

      event.preventDefault();
    } else {
      document.getElementById("emailFieldError").innerHTML = "";
    }
  });

let passValidation = document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    let password = document.getElementById("passInput").value;

    if (password.trim() === "") {
      document.getElementById("passFieldError").innerHTML =
        "Ingresa una contraseña";

      event.preventDefault();
    } else {
      document.getElementById("passFieldError").innerHTML = "";
    }
  });

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNhcmxvcyBIZXJtb3NpbGxvIiwiaWF0IjoxNTE2MjM5MDIyfQ.Dwj6NgrYTWfePd_9Y_4a77zrxY-u78g3PY_but6Ng8c";

localStorage.setItem("token", token);

window.open("index.html", "_self");
*/
