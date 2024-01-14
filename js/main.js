//Este event listener es para el botón login del header y manda al login.html
let logInBtn = document.getElementById("logInBtn");
logInBtn.addEventListener("click", () => {
  window.open("./login.html", "_self");
});
//Este event listener es para el botón login del aside y manda al login.html
let asideLoginBtn = document.getElementById("asideLoginBtn");
asideLoginBtn.addEventListener("click", () => {
  window.open("./login.html", "_self");
});

//Estos event listeners son para la nav bar que cambia los posts dentro de la sección central
let postsArea = document.getElementById("postsArea");
let relevantBtn = document.getElementById("relevantBtn");
relevantBtn.addEventListener("click", () => {
  postsArea.innerHTML();
});

let latestBtn = document.getElementById("latestBtn");
latestBtn.addEventListener("click", () => {
  postsArea.innerHTML();
});

let topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click", () => {
  postsArea.innerHTML();
});

//Esta función me entrega todos los posts de firebase en un objeto
let getAllPosts = async () => {
  let response = await fetch(
    "https://dev-to-9949e-default-rtdb.firebaseio.com/posts/.json"
  );
  let data = await response.json();
  let postsArray = Object.keys(data).map((key) => ({ ...data[key], key }));
  return postsArray;
};

//let postAllPosts =
