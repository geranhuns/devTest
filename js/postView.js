// realtime database= https://dev-to-9949e-default-rtdb.firebaseio.com/.json

const component = async (fecha, tags, imgPost, titulo, user) => {
  let userInfo = await printOnePostUserInfoPV(user)

 let nomUser = userInfo.username
 let fotoProfile = userInfo.profilePicture

  containerClean().then((contenedorPost) => {

    let divContenedor = document.createElement("div");
    divContenedor.classList.add("publicacion1")
    

    let divImgPost = document.createElement("div")
    divImgPost.classList.add("imagen")
    let imgPostForDiv = document.createElement("img")
    imgPostForDiv.src= `${imgPost}`;
    

    let datos = document.createElement("div")
    datos.classList.add("datos")
    
    let contenidoDatos = document.createElement("div")
    contenidoDatos.classList.add("contenido-datos")
    

    let nombre = document.createElement("div")
    nombre.classList.add("nombre")
    

    let nombreData = document.createElement("div")
    nombreData.classList.add("nombre-data")
    

    let foto = document.createElement("div")
    foto.classList.add("foto")
    let imgFoto = document.createElement("img")
    imgFoto.src=`${fotoProfile}`
    

    let dateAndName = document.createElement("div")
    dateAndName.classList.add("date-and-name")
    let nameforDAN = document.createElement("h4")
    nameforDAN.textContent=`${nomUser}`
    let dateforDAN = document.createElement("h5")
    dateforDAN.textContent=`${fecha}`
    
    let post = document.createElement("div")
    post.classList.add("post")

    let reacciones = document.createElement("span")
    reacciones.classList.add("reacciones", "col-5")

    reacciones.innerHTML=`<span class="1"><img
    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
    width="35" height="35"></span>
<span class="2"><img
    src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
    width="35" height="35"></span>
<span class="3"><img
    src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
    width="35" height="35"></span>
<span class="4"><img
    src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
    width="35" height="35"></span>
<span class="5"><img
    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
    width="35" height="35"></span>`


    //armando cosas
    //--armando imagen del post ---
    divContenedor.append(divImgPost,datos)
    // ------
    //--armando imagen del post ---
    divImgPost.append(imgPostForDiv)
    // ------
    //--armando datos ---
    datos.append(contenidoDatos)
    // ------
    //--armando contenidoDatos ---
    contenidoDatos.append(nombre,post)
    // ------
    //--armando nombre ---
    nombre.append(nombreData)
    // ------
    //--armando nombre-data ---
    nombreData.append(foto,dateAndName)
    // ------
    //------armando foto---
    foto.append(imgFoto)
    //-------
    //-----armando date and name--
    dateAndName.append(nameforDAN,dateforDAN)
    //-----------------------------
    //-----armando date and name--
    post.append(reacciones)
    //-----------------------------
   
   
    //-=-=-=-=-=-=-=-

    contenedorPost.append(divContenedor)
    return contenedorPost
  });

};

const containerClean = () => {
  return new Promise((resolve) => {
    let newWindow = window.open('postView.html', '_blank'); //preguntar porque solo funciona con blank

    newWindow.addEventListener('load', () => {
      let contenedorPost = newWindow.document.getElementById("containerPost");
      contenedorPost.innerHTML = '';
      resolve(contenedorPost);
     
      
    });
  });
};





//funcion que busca users en BD
let getAllUsersPV = async () => {
  let response = await fetch(
    "https://dev-to-9949e-default-rtdb.firebaseio.com/users/.json"
    );
    let data = await response.json();
    return data
  };

// ------------------------

const printOnePostUserInfoPV = async (username) => {
  let allUsersObject = await getAllUsersPV()
  let allUsersArray = Object.keys(allUsersObject).map((key)=>({...allUsersObject[key],key}))
//    console.log(allUsersArray)

  let user = allUsersArray.find(user=>(user.username===username))
  
  return user
  
}


// let userInfo = await printOnePostUserInfoPV(username,dateString)
    // divPost.append(image,userInfo)
//codigo gera


