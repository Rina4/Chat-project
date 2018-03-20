/*
Keep track of connected users in the chat
A user should have a unique identifier (e.g. email or a username), otherwise
they should not be allowed to join
A user also needs to be able to leave
Keep a record of all the messages
Let users send a message to the chat
A message need to contain: A message, a send date and an author
Search within messages
By content and by author
Censor messages containing certain words
Censored should still be saved
*/


var Chat = (function () {
    let users = [];
    let module = {};

    module.joinChat = function (user) {
      console.log('User is trying to join: ', user)
      let userAlreadyConn = false

      for (let i=0; i<users.length; i++){
        if (users[i] == user){
          userAlreadyConn = true
        }
      }
        if(userAlreadyConn){
        console.log ('User already exists: ', user)
        } else {
        users.push(user)
        console.log ('User joined Chat: ', user)
    }
  }
    return module
})();





/*
module.joinChat = function (user) {
  console.log('User is trying to join: ', user)
  let userAlreadyConn = false

  for (let i=0; i<users.length; i++){
    if (users[i] == user){
      console.log ('User already exists', user)
      userAlreadyConn = true
    } else {
    users.push(user)
    console.log ('User joined Chat: ', user)
}
return module

module.joinChat = function (user) {
  console.log ('Users is trying to join the chat', user);
  let userAlreadyConn = false;

  for(let i = 0; i < users.lenth; i++){
    if (users[i] == user){
      userAlreadyConn = true;
    }
 }
 if (userAlreadyConn){
   console.log('User already exists: ', user);
 } else {
   users.push (user);
   console.log('User joined the Chat: ', user);
 }
}
return module;

module.joinChat = function (user){
console.log ('user is trying to join', user)
let userAlreadyConn = false

for(let i = 0; i <users.length; i ++){
if (users[i]==user){
userAlreadyConn = true
  }
}
if (userAlreadyConn){
  console.log ('user already connected')
} else {
  users.push(user)
}
return module
}





=======
var Chat = (function () {
 // Users
<<<<<<< HEAD
 let users = []

let module = {}
module.joinChat = function (user) {
  console.log('User is trying to join', user)

  let userAlreadyConnected = false

  for(let i = 0; i < users.length; i++) {
    //Check if the user who is joining already is connected
    if (users[i] == user) {
      userAlreadyConnected = true
    }
  }


  if (userAlreadyConnected) {
    console.log('User already connnected', user)
  } else {
  //Add user to connected users
    users.push(user)
  }
}
return module
})()


let module = {}
module.leaveChat = function (user) {
  console.log('User is trying to leave' , user)

  let



}


// module.joinChat('Rina')

/*different arrays for different functions,
 e.g. an array for chat messages, for usernames etc.
*/

=======
let users = []

let module = {}
module.joinChat = function (user) {
  console.log('User is trying to join: ', user)

  let userAlreadyConnected = false

  for(let i = 0; i < users.length; i++) {
    //Check if the user who is joining already is connected
    if (users[i] == user) {
      userAlreadyConnected = true
    }
  }


  if (userAlreadyConnected) {
    console.log('User already connnected: ', user)
  } else {
  //Add user to connected users
    users.push(user)
    console.log ('User joined Chat: ', user)
  }
}
return module
})()

//module.joinChat('Rina')

/*different arrays for different functions,
 e.g. an array for chat messages, for usernames etc.
*/

>>>>>>> 81614a12c19ff98109595a2636ec60af7aa8e1d6
/*
  arr.forEach(function(users)){
  if (!user == users){
        console.log('user joined chat', user);
        users.push(user)
      }
    }
  }

*/
