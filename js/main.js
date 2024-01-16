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










//Esta función me entrega todos los posts de firebase en un objeto pero hay que insertarla en el foreach
let getAllPosts = async () => {
  let response = await fetch(
    "https://dev-to-9949e-default-rtdb.firebaseio.com/posts/.json"
    );
    let data = await response.json();
  return data
};

//Esta función me entrega todos los posts de firebase en un objeto pero hay que insertarla en el foreach
let getAllUsers = async () => {
  let response = await fetch(
    "https://dev-to-9949e-default-rtdb.firebaseio.com/users/.json"
    );
    let data = await response.json();
    return data
  };
  
 let timestampToDate = (dateToChange)=>{
  //console.log(dateToChange)
  let fecha = new Date(parseInt(dateToChange));
  //console.log(fecha)
// 3 letras del mes en inglés
let nombreMes = fecha.toLocaleString('en', { month: 'short' });

// número del día
let numeroDia = fecha.getDate();

// concatena
let fechaFormateada = `${nombreMes} ${numeroDia}`;

return fechaFormateada
 }
  const printOnePostPart1 = async (postObject) => {
    

    let {date,hashtags,postImage,title,username,key  } =postObject
    console.log(username)
    let dateString= timestampToDate(date)
    
    let postsArea = document.getElementById("postsArea")
    let divPost = document.createElement("div");
    divPost.classList.add("col-12", "card", "postSpacing");
    divPost.id = key
    
    let image = document.createElement("img");
    image.classList.add("card-img-top");
    //image.style.display="none"
    image.src = `${postImage}`;
    
    let userInfo = await printOnePostUserInfo(username,dateString)
    divPost.append(image,userInfo)
    
    
    let postTitle = document.createElement("h2")  
    postTitle.classList.add("fs-1","postTitle","px-5")
    let postTitleText = document.createTextNode(`${title}`)
    postTitle.append(postTitleText)

    divPost.append(postTitle)
    

    let hashtagDiv = document.createElement("div")
    hashtagDiv.classList.add("Hastag")
    hashtags.forEach((hashtag,i)=>{
      let hashtagA= document.createElement("a")
      hashtagA.classList.add(`a${i}`)
      let hashtagAText = document.createTextNode(hashtag)
      hashtagA.append(hashtagAText)
      hashtagDiv.append(hashtagA)
    })
    divPost.append(hashtagDiv)






    let restoDelPostDiv = document.createElement("div")
    restoDelPostDiv.classList.add("Interactions")
     restoDelPostDiv.innerHTML=`                        
                            <div class="emoticones-comentarios">

                                <span class="reacciones">
                                    <span><img
                                            src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                            width="18" height="18"></span>
                                    <span><img
                                            src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                            width="18" height="18"></span>
                                    <span><img
                                            src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                            width="18" height="18"></span>
                                    <span><img
                                            src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                            width="18" height="18"></span>
                                    <span><img
                                            src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                            width="18" height="18"></span>
                                </span>
                                <span class="contadorReacciones">
                                    340 reactions
                                </span>

                                <span class="contadorcomentarios">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img"
                                        aria-labelledby="aewrn1ygzu2zckt6iwmhazo9x6f8e3kt" class="crayons-icon">
                                        <title id="aewrn1ygzu2zckt6iwmhazo9x6f8e3kt">Comments</title>
                                        <path
                                            d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                                        </path>
                                    </svg>
                                    104 Coments
                                </span>

                            </div>
                            <div class="visitas">
                                4 min read
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true">
                                    <path
                                        d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z">
                                    </path>
                                </svg></span>
                            </div>
                        </div>
                    </div>
                `
    divPost.append(restoDelPostDiv)
    
    postsArea.append(divPost)
    
    hideImages()
  }
  
 


  const printOnePostUserInfo = async (username,date) => {
    let allUsersObject = await getAllUsers()
    let allUsersArray = Object.keys(allUsersObject).map((key)=>({...allUsersObject[key],key}))
//    console.log(allUsersArray)
let user = allUsersArray.find(user=>(user.username===username))
console.log(user)
//    console.log(user)
    let profilePicture = user.profilePicture
//    console.log(profilePicture)


    // let { profilePicture, username, key} = userObject
    
    let CardBody = document.createElement("div");
    CardBody.classList.add("card-body");

    let UserInfo = document.createElement("div");
    UserInfo.classList.add("foto", "row");

    let UserProfilePicture = document.createElement("img");
    UserProfilePicture.classList.add("col.2");
    UserProfilePicture.style.width = "4.5rem";
    UserProfilePicture.src = `${profilePicture}`;
    let userJoinedDiv = document.createElement("div");
    userJoinedDiv.classList.add("col-6");

    let Username = document.createElement("h5");
    let UsernameText = document.createTextNode(`${username}`);
    Username.append(UsernameText)    

    let postDate = document.createElement("h6");
    postDate.classList.add("fw-light");
    let postDateText = document.createTextNode(`${date}`);
    postDate.append(postDateText)
    userJoinedDiv.append(Username,postDate)

    UserInfo.append(UserProfilePicture, userJoinedDiv)
    CardBody.append(UserInfo)

    return CardBody
    
  }

  const printAllPosts = async ()=>{
    let allPostsObject = await getAllPosts()
    let allPostsArray = Object.keys(allPostsObject).map((key)=>({...allPostsObject[key], key}))
    postsArea.innerHTML=""

    allPostsArray.forEach((post)=>{
      printOnePostPart1(post)

    })
    
}
 
let hashtagsColumns = ["#webdev","#tutorial","#programming"]


const asideListFilter = async (hashtagEspecifico)=> {
  
  let allPostsObject = await getAllPosts()
  //console.log(allPostsObject)
  let allPostsArray = Object.keys(allPostsObject).map((key)=>({...allPostsObject[key],key }))
  //console.log(allPostsArray)
  
  let  postsWithHashtags =  allPostsArray.filter( (post)=>{
  let {hashtags, title} = post
  //console.log(hashtags)
   let hashtagsToEvaluate = hashtags
   //console.log(title)

   let titlesWithHashtagsArray =  hashtagsToEvaluate.includes(`${hashtagEspecifico}`)

   return titlesWithHashtagsArray
    // post.hashtags.flat().includes(`${hashtagEspecifico}`)
  }).map((post)=>post.title)
  //console.log(postsWithHashtags)
let asideRight = document.getElementById("asideRight")
  
  let newColumn = document.createElement("section")
  newColumn.classList.add("elements")
  let newColumnTitle = document.createTextNode(hashtagEspecifico)

  let newTitleDiv = document.createElement("h2")
  newTitleDiv.classList.add("containerHeader")
  let newTitleDivText = document.createTextNode(hashtagEspecifico)

  newTitleDiv.append(newTitleDivText)
  newColumn.append(newTitleDiv)
  asideRight.prepend(newColumn)

  let articlePost = postsWithHashtags.forEach((title)=>{
//console.log(title)
    let newArticleTitle =document.createElement("div")
    newArticleTitle.classList.add("article")
    let newArticleA = document.createElement("a")
    let newTitleText = document.createTextNode(title)
    let comments = document.createElement("div")
    comments.classList.add("comments")
    let commentsText = document.createTextNode("12 comments")

    comments.append(commentsText)
    newArticleA.append(newTitleText)
    newArticleTitle.append(newArticleA,comments)
   newColumn.append(newArticleTitle)
  })
  //console.log(articlePost)
  //devuelve array con titulos
}
/*

let printHashtagList = async (hashtagEspecifico)=>{
  let titlesWithHashtagsArray = await asideListFilter(hashtagEspecifico)
console.log(titlesWithHashtagsArray)
  let asideRight = document.getElementById("asideRight")
  
  let newColumn = document.createElement("section")
  newColumn.classList.add("elements")
  let newColumnTitle = document.createTextNode(hashtagEspecifico)

  let newTitleDiv = document.createElement("h2")
  newTitleDiv.classList.add("containerHeader")
  let newTitleDivText = document.createTextNode(hashtagEspecifico)

  newTitleDiv.append(newTitleDivText)
  newColumn.append(newTitleDiv)
  asideRight.append(newColumn)

  let articlePost = titlesWithHashtagsArray.forEach((title)=>{
console.log(title)
    let newArticleTitle =document.createElement("div")
    newArticleTitle.classList.add("article")
    let newArticleA = document.createElement("a")
    let newTitleText = document.createTextNode(title)
    let comments = document.createElement("div")
    comments.classList.add("comments")
    let commentsText = document.createTextNode("12 comments")

    comments.append(commentsText)
    newArticleA.append(newTitleText)
    newArticleTitle.append(newArticleA,comments)
   newColumn.append(newArticleTitle)
  })
  console.log(articlePost)




}
*/


let searchBar = document.getElementById("inputSearchBar")

searchBar.addEventListener("keyup", async (event)=>{
  let searchText = event.target.value.toLowerCase()

  let allPostsObject = await getAllPosts()
  
  let allPostsArray = Object.keys(allPostsObject).map((key) => ({...allPostsObject[key],key }))

  // Iterar sobre todas las tarjetas y aplicar el filtro
  allPostsArray.forEach((post) => {
    //console.log(post)
    let postTitle = post.title.toLowerCase();
    //console.log(postTitle)
    let postElement = document.getElementById(post.key);  // Asigna un ID único a cada tarjeta
    //console.log(postElement)
    if (!postTitle.includes(searchText)) {

      //console.log(postTitle)
      //console.log(Array.from(postElement.classList))
      postElement.classList.add("hidden");
      //console.log(Array.from(postElement.classList))
    } 
    else {
      // Si el título no cumple con el filtro, oculta la tarjeta
      if(postTitle.includes(searchText) && postElement.classList.contains("hidden")){
      postElement.classList.remove("hidden");}
    }
  });

  /*
  let allPostsArray = Object.keys(allPostsObject).map((key)=>({
    title: allPostsObject[key].title,
  }));
  
  let  titlesFilter =  allPostsArray.filter( (post) =>
    post.title.toLowerCase().includes(searchText)
  );
    console.log(titlesFilter);
postsArea.innerHTML = '';
*/
});

let hideImages = () =>{
let postElements = document.querySelectorAll(".postSpacing");
//console.log(postElements)
postElements.forEach((postElement, index) => {
  // Muestra la imagen solo en el primer post (índice 0)
  let imageElement = postElement.querySelector(".card-img-top");
  if (imageElement) {
    if (index !== 0) {
      imageElement.classList.add("hidden");
      } 
  }
});
}



let relevantBtn = document.getElementById("relevantBtn");
relevantBtn.addEventListener("click", async (event) => {
  event.preventDefault()
  
  let allPostsObject = await getAllPosts()
  let allPostsArray = Object.keys(allPostsObject).map((key) => ({...allPostsObject[key],key }))

    // Iterar sobre todas las tarjetas y aplicar el filtro
  allPostsArray.forEach(post => {
    //console.log(post)
    let postElement = document.getElementById(post.key);
   // console.log(postElement)
    let postRelevancy = post.relevant
  //  console.log(postRelevancy)

  if (!postRelevancy) {

      //console.log(postTitle)
      //console.log(Array.from(postElement.classList))
      postElement.classList.add("hidden");
      //console.log(Array.from(postElement.classList))
    } 
    else {
      // Si el título no cumple con el filtro, oculta la tarjeta
      if(postRelevancy && postElement.classList.contains("hidden")){
      postElement.classList.remove("hidden");}
    }
});

});

let latestBtn = document.getElementById("latestBtn");
latestBtn.addEventListener("click", async (event) => {
  event.preventDefault()
  let allPostsObject = await getAllPosts()
  let allPostsArray = Object.keys(allPostsObject).map((key) => ({...allPostsObject[key],key }))

    // Iterar sobre todas las tarjetas y aplicar el filtro
  allPostsArray.forEach(post => {
    
    let postElement = document.getElementById(post.key);
    let postDate = timestampToDate(post.date)
    //console.log(postDate)
    
    let todayTimestamp = Date.now()
    let todayDate = timestampToDate(todayTimestamp)
    //console.log(todayDate)

  if (!(postDate===todayDate)) {

      //console.log(postTitle)
      //console.log(Array.from(postElement.classList))
      postElement.classList.add("hidden");
      //console.log(Array.from(postElement.classList))
    } 
    else {
      // Si el título no cumple con el filtro, oculta la tarjeta
      if(((postDate===todayDate)) && postElement.classList.contains("hidden")){
      postElement.classList.remove("hidden");}
    }
});
  


});

let topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click", async(event) => {
  
  event.preventDefault()
  
  let allPostsObject = await getAllPosts()
  let allPostsArray = Object.keys(allPostsObject).map((key) => ({...allPostsObject[key],key }))

    // Iterar sobre todas las tarjetas y aplicar el filtro
  allPostsArray.forEach(post => {
    //console.log(post)
    let postElement = document.getElementById(post.key);
   // console.log(postElement)
    let postRating = post.rating
  //  console.log(postRelevancy)

  if (postRating<10) {

      //console.log(postTitle)
      //console.log(Array.from(postElement.classList))
      postElement.classList.add("hidden");
      //console.log(Array.from(postElement.classList))
    } 
    else {
      // Si el título no cumple con el filtro, oculta la tarjeta
      if(postRating>10 && postElement.classList.contains("hidden")){
      postElement.classList.remove("hidden");}
    }
});


});





const printAllColumns = ()=> { hashtagsColumns.forEach((hashtag)=> asideListFilter(hashtag))

 }
printAllPosts()
 printAllColumns()
