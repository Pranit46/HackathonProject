async function getUsers(){

  try{
  const data = await fetch('https://api.github.com/users/octocat/repos',{method:"GET"});
  const users = await data.json();
  console.log(users);
  return users
  }catch{
     console.log('Page Not found')
  }
 }
 
 async function displayUsers(){
     const users = await getUsers();
     console.log(users);
     
   users.forEach((user) =>{
         console.log(user.name); 
         console.log(user.id)
         
         console.log(user.forks_count); 
         console.log(user.stargazers_count);

         //document.querySelector('.OwnerName').innerText = user.owner.login 
         const userList = document.querySelector('.user-list');
         userList.innerHTML += `<div class="user-container">
         
         <h2 class='Name'>${ user.name }</h2>
         <a class='ulrCode' onclick='codePage("${user.html_url}")' > Show code</a>
         <div class='countForkLike'>
         <div class='starCountContainer'>
           <span class='star'>&#x2606;</span><span class='starCount'>${ user.stargazers_count }
         </div>
         
         <div class='forkCountContainer'>
           <img  class='imageFork' src='https://cdn.iconscout.com/icon/free/png-64/git-fork-3601911-3003686.png' >
           <span class='forkCount'>${ user.forks_count }</span>
         </div> 

        
        </div>
        </div>
         `     
 
     })
     
 }
 displayUsers()
 
 function codePage(id){
     console.log('delte user',id)
      window.open(id);
 }