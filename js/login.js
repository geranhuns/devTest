document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    let email = document.getElementById("emailInput").value;

    if (email.trim() === "") {
      document.getElementById("emailFieldError").innerHTML = "Ingresa un email";
      event.preventDefault();
      return;
    } else {
      document.getElementById("emailFieldError").innerHTML = "";
    }

    let password = document.getElementById("passInput").value;

    if (password.trim() === "") {
      document.getElementById("passFieldError").innerHTML =
        "Ingresa una contraseña";

      event.preventDefault();
      return;
    } else {
      document.getElementById("passFieldError").innerHTML = "";
    }
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNhcmxvcyBIZXJtb3NpbGxvIiwiaWF0IjoxNTE2MjM5MDIyfQ.Dwj6NgrYTWfePd_9Y_4a77zrxY-u78g3PY_but6Ng8c";

    localStorage.setItem("token", token);

    window.open("index.html", "_self");
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
