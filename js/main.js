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
    image.src = `${postImage}`;
    
    let userInfo = await printOnePostUserInfo(username,date)
    divPost.append(image,userInfo)
    
    
    let postTitle = document.createElement("h2")  
    postTitle.classList.add("fs-1","postTitle","px-5")
    let postTitleText = document.createTextNode(`${title}`)
    postTitle.append(postTitleText)

    divPost.append(postTitle)
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


  //Esta función replica tantas veces sea necesario la función createPostItem
  
  
  
  
  /*
 

const createPostItem = (post) => {
    let { postImage, username, title, date, hashtags, key } = post;
    // let userIndex = allUsersArray.findIndex(
    //   (user) => user.username === username
    // );
    // let { profilePicture, bio, joined } = users[userIndex];

    // Crear elementos
    
    let divPost = document.createElement("div");
    divPost.classList.add("col-12", "card", "postSpacing");

    let PostImage = document.createElement("img");
    PostImage.classList.add("card-img-top");
    PostImage.src = `${postImage}`;
    let CardBody = document.createElement("div");
    CardBody.classList.add("card-body");

    let UserInfo = document.createElement("div");
    UserInfo.classList.add("foto", "row");

    let UserProfilePicture = document.createElement("div");
    UserProfilePicture.classList.add("col.2");
    UserProfilePicture.style.width = "4.5rem";
    //UserProfilePicture.src = profilePicture;
    let userJoinedDiv = document.createElement("div");
    userJoinedDiv.classList.add("col-6");

    let Username = document.createElement("h5");
    let UsernameText = document.createTextNode(`${username}`);
    let postDate = document.createElement("h6");
    postDate.classList.add("fw-light");
    let postDateText = document.createTextNode(`${date}`);


    let postTitle = document.createElement("h2")  
    postTitle.classList.add("fs-1","postTitle","px-5")
    let postTitleText = document.createTextNode(`${title}`)
    postTitle.append(postTitleText)
    
    
     let HashtagsDiv = document.createElement("div")
     HashtagsDiv.classList.add("Hastag")
     let A1 = document.createElement("a")
     A1.classList.add("a1")
     let A1Text = document.createTextNode(`${hashtags[1]}`)
     A1.append(A1Text)
     let A2 = document.createElement("a")
     A2.classList.add("a2")
     let A2Text = document.createTextNode(`${hashtags[2]}`)
     A2.append(A2Text)
     let A3 = document.createElement("a")
     A3.classList.add("a3")
     let A3Text = document.createTextNode(`${hashtags[3]}`)
     A3.append(A3Text)
     let A4 = document.createElement("a")
     A4.classList.add("a4")
     let A4Text = document.createTextNode(`${hashtags[4]}`)
     A4.append(A4Text)
     HashtagsDiv.append(A1,A2,A3,A4) 

    CardBody.append()
    // Construir la estructura del DOM
    postDate.append(postDateText);
    Username.append(UsernameText);
    userJoinedDiv.append(Username, postDate);
    UserInfo.append(UserProfilePicture, userJoinedDiv);
    CardBody.append(UserInfo);
    divPost.append(PostImage, CardBody);
  }
//let postAllPosts = getAllPosts()
const postallPosts = (posts) => {

let postsArea = document.getElementById("postsArea");
  postsArea.innerHTML = "";
  let postsArray = Object.keys(posts).map((key) => ({ ...posts[key], key }));

  postsArray.forEach((post) => {
    let postItem = createPostItem(post);
    postsArea.append(postItem);

    
  });
}; 
*/