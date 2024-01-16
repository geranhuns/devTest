const url_firebase = "https://javascript30-1a76d-default-rtdb.firebaseio.com/.json";

const buttonPublish = document.getElementById("publishButton");
const inputTitle = document.getElementById("cajaTxt__titulo");
const inputCoverImage = document.getElementById("coverImg");
const inputPostContent = document.getElementById("postContTxt");
const inputTags = document.getElementById("tagTxt");
let posts;

const createPost = async () => {
  let fechaActual = Date.now();

  const post = {
    title: inputTitle.value,
    contenido: inputPostContent.value,
    postImage: inputCoverImage.value,
    hashtags: inputTags.value.split(","),
    date: fechaActual,
    userName: "Gerardo",
    relevant: false,
  };

  posts.push(post);

  if (post.title && post.contenido) {
    const response = await fetch(url_firebase, {
      method: "PUT",
      body: JSON.stringify(posts),
    });

    window.location.href = "../index.html";
  } else {
    alert("El titulo y contenido son campos obligatorios");
  }
};

buttonPublish.addEventListener("click", () => {
  createPost();
});

const getInfo = async () => {
  const response = await fetch(url_firebase);
  if (response.status !== 201) {
    const parsed = await response.json();
    posts = parsed;
  }
};

getInfo();
