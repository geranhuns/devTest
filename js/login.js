document
  .getElementById("formulario")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passInput").value;

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("response", response);
      const responseData = await response.json();
      console.log("responsedata", responseData);
      console.log(responseData.msg);
      if (response.ok) {
        const token = responseData.data;

        localStorage.setItem("token", token);
        window.open("../index.html", "_self");

        // document.getElementById("hide1").style.display = "none";
        // document.getElementById("hide2").style.display = "none";
        // document.getElementById("createPostBtn").style.display = "block";
        event.preventDefault();
      } else {
        console.log("Login failed");
      }
    } catch (err) {
      console.log(err);
    }
  });
