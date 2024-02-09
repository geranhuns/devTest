//const url_firebase = "https://dev-to-9949e-default-rtdb.firebaseio.com/posts/.json"
const url_mongo = "http://localhost:3001/posts"

const buttonPublish = document.getElementById("publishButton");
const inputTitle = document.getElementById("cajaTxt__titulo");
const inputCoverImage = document.getElementById("coverImg");
const inputPostContent = document.getElementById("postContTxt");
const inputTags = document.getElementById("tagTxt");
let posts;

const createPost = async () => {
  let fechaActual = new Date().toISOString()

  const post = {
    title: inputTitle.value,
    contenido: inputPostContent.value,
    postImage: inputCoverImage.value,
    hashtags: inputTags.value.split(","),
    date: fechaActual,
    username: "Gerardo",
    relevant: false,
  };
  console.log('post', post)
  //posts.push(post);


  if (post.title && post.contenido) {
    const response = await fetch(url_mongo, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    });
    console.log('response', response)

    // window.location.href = "../index.html";
  } else {
    alert("El titulo y contenido son campos obligatorios");
  }
};

buttonPublish.addEventListener("click", () => {
  createPost();
});
/*
const getInfo = async () => {
  const response = await fetch(url_firebase);
  if (response.status !== 201) {
    const parsed = await response.json();
    posts = parsed;
  }
};

getInfo();*/
