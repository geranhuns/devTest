// realtime database= https://dev-to-9949e-default-rtdb.firebaseio.com/.json


const component = async (fecha, tags, imgPost, titulo, user) => {
  let userInfo = await printOnePostUserInfoPV(user)

 let nomUser = userInfo.username
 let fotoProfile = userInfo.profilePicture

containerClean().then(({ contenedorPost, asideProfile }) => {
    

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

    let tituloPost = document.createElement("h2")
    
    let Hastag = document.createElement("div")
    Hastag.classList.add("Hastag")

    tags.forEach((hashtag,i)=>{
      let hashtagA= document.createElement("a")
      hashtagA.classList.add(`a${i}`)
      let hashtagAText = document.createTextNode(hashtag)
      hashtagA.append(hashtagAText)
      Hastag.append(hashtagA)
    })

    let complementario = document.createElement("div")
    complementario.classList.add("container", "center", "col-12")
    complementario.innerHTML= `<hr class="bg-success mx-auto">
    <div class="PHardcoreado ">
    <div class="container d-flex flex-column justify-content-center align-items-center text-center">
        <h2>Breaking News!!!</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero at praesentium voluptatibus illo nobis assumenda maxime, quas adipisci tenetur nulla fugit, laudantium ducimus? Consequatur repudiandae soluta aspernatur debitis voluptatibus in.
        Libero rem laudantium ipsum minima asperiores nobis, odit dolorem, eius sequi ipsam quibusdam tenetur odio quisquam non sapiente reprehenderit, labore blanditiis possimus. Eum cumque itaque adipisci, corrupti commodi consequuntur magni.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos unde debitis nihil fuga quisquam at excepturi, ratione sed incidunt, eaque optio consequuntur id adipisci velit porro laboriosam inventore in?
        Id, impedit! Adipisci, at unde deleniti alias eaque dolore vero est explicabo neque dolorum? Velit quam id aperiam eum voluptates quaerat necessitatibus temporibus quas quis nobis? Sed, debitis sunt. Officiis!</p>
    </div>              
</div>
<hr class="bg-success col-12 mx-auto">
<div class="cajaComentarios container ">
    <div class="container col-10 d-flex justify-content-between">
        <div><h3>Top comments 3</h3></div>
        <div><button class="btn btn-primary">Suscribe</button></div>
    </div>
    <div class="container col-12 d-flex flex-row">
        <div class="col-2">
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--MKQhzirg--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1253234/39957cd3-32a4-4a71-9837-724db3e804bc.jpg" alt="">
        </div >
        
            <input class="form-control" placeholder="Add to the discussion" type="text">

    </div>
</div>
</div>`
    

    //armando cosas
    //--armando imagen del post ---
    divContenedor.append(divImgPost,datos,complementario)
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
    post.append(reacciones,tituloPost,Hastag)
    //-----------------------------
    tituloPost.textContent=`${titulo}`
    
   
    //-=-=-=-=-=-=-=-

    
    contenedorPost.append(divContenedor)

    //hasta aqui llega el codigo del Post

    //------------------------comienza el codigo de profile
    // asideProfile.innerHTML="holaaaa"
    let name = userInfo.username
  let biografia = userInfo.bio
  let joinedUser = userInfo.joined
  let profileImg = userInfo.profilePicture
  console.log(userInfo)

   let userDataDiv = document.createElement('div')
  userDataDiv.classList.add("UserdataDiv","col-12")

  let lineaBlack = document.createElement("div")
  lineaBlack.classList.add("lineaBlack", "col-12", "bg-dark")

  let containerDataUser = document.createElement("div")
  containerDataUser.classList.add("containerDataUser","col-11")

  let nameProfileImg = document.createElement("div")
  nameProfileImg.classList.add("containerNameandProfileimg","col-12")
    let imgForProfile = document.createElement("img")
    imgForProfile.src =`${profileImg}`

    let spanForName = document.createElement("span")
    spanForName.classList.add("NameUser")
    let h4ForName = document.createElement("h4")
    h4ForName.textContent=`${name}`

    
  let botonForUserdata = document.createElement("button")
  botonForUserdata.classList.add("btn")
  botonForUserdata.textContent="FOLLOW"

  let parrafo = document.createElement("p")
  parrafo.textContent=`${biografia}`

  let personaldata = document.createElement("div")
  personaldata.classList.add("containerPersonalData")

  let divForJoin = document.createElement("div")
  let spanForJoin = document.createElement("span")
  let bForSpanJoin = document.createElement("b")
  bForSpanJoin.textContent="JOINED"

  spanForJoin.appendChild(bForSpanJoin)

  let spanDateJoin = document.createElement("span")
  spanDateJoin.textContent= `${joinedUser}`

  //Armando componentes
  //containerpersonaldata
  divForJoin.append(spanForJoin,spanDateJoin);

  personaldata.append(divForJoin)
  //--------
  //Container name and profile
  spanForName.append(h4ForName)
  nameProfileImg.append(imgForProfile,spanForName)

  //container data user
  containerDataUser.append(nameProfileImg,botonForUserdata,parrafo,personaldata)

  //userdataDiv
  userDataDiv.append(lineaBlack,containerDataUser)

  asideProfile.append(userDataDiv)

  // return asideDerecho
  
  

    //---------------------------------termina codigo profile


    return contenedorPost
  });

  
  
   
  

};

// const containerClean = () => {  //ESTA ES LA QUE FUNCIONA
//   return new Promise((resolve) => {
//     let newWindow = window.open('postView.html', '_blank'); //preguntar porque solo funciona con blank

//     newWindow.addEventListener('load', () => {
//       let contenedorPost = newWindow.document.getElementById("containerPost");
//       contenedorPost.innerHTML = '';
//       resolve(contenedorPost);
     
      
//     });
//   });
// };


const containerClean = () => {  //ESTA ES LA PRUEBA
  return new Promise((resolve) => {
    let newWindow = window.open('postView.html', '_blank'); //preguntar porque solo funciona con blank

    newWindow.addEventListener('load', () => {
      let contenedorPost = newWindow.document.getElementById("containerPost");  
      let asideProfile = newWindow.document.getElementById("asideRigthProfile");
      contenedorPost.innerHTML = '';
      asideProfile.innerHTML = '';
      // asideProfile.innerHTML = 'que pedooooo';
      resolve({ contenedorPost, asideProfile });
     
      
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


