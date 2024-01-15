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
  
 
  const printOnePostPart1 = async (postObject) => {
    

    let {date,hashtags,postImage,title,username,key  } =postObject

    let postsArea = document.getElementById("postsArea")
    let divPost = document.createElement("div");
    divPost.classList.add("col-12", "card", "postSpacing");
    
    let image = document.createElement("img");
    image.classList.add("card-img-top");
    //image.style.display="none"
    image.src = `${postImage}`;
    
    let userInfo = await printOnePostUserInfo(username,date)
    divPost.append(image,userInfo)
    
    
    let postTitle = document.createElement("h2")  
    postTitle.classList.add("fs-1","postTitle","px-5")
    let postTitleText = document.createTextNode(`${title}`)
    postTitle.append(postTitleText)

    divPost.append(postTitle)
    
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
    
  }
  

  //   let userObject = {bio: "I'm a self-taught Web developer who is always learning and creating cool Project stuffs.",
  // joined: "Oct 25, 2023", profilePicture: "https://res.cloudinary.com/practicaldev/image/fetch/s--HEkuRW18--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1193992/1091549e-d581-4faf-81d9-e2e1f8e82ab1.png", username: "Random"}

    //       let userID = allUsersArray.find(user=>(user.username===username))
    // let userObject = allUsersArray.userID



  const printOnePostUserInfo = async (username,date) => {
    let allUsersObject = await getAllUsers()
    let allUsersArray = Object.keys(allUsersObject).map((key)=>({...allUsersObject[key],key}))
//    console.log(allUsersArray)

    let user = allUsersArray.find(user=>(user.username===username))
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
 


const asideListFilter = async (hashtagEspecifico)=> {
  
  let allPostsObject = await getAllPosts()
  console.log(allPostsObject)
  let allPostsArray = Object.keys(allPostsObject).map((key)=>({...allPostsObject[key],key }))
  console.log(allPostsArray)
  
  let  postsWithHashtags = allPostsArray.filter((post)=>
     post.hashtags.hashtagEspecifico
     )
     console.log(postsWithHashtags);
  console.log(postsWithHashtags)
  let asideRigth = document.getElementById("asideRigth")

}

printAllPosts()
  


  