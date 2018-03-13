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
    // Users
    let users = []
    let module = {}
    module.joinChat = function (user) {
      function contains(users, user){}
      for (let i = 0; i <users.length; i ++){
        if (users[i]== user){
          console.log ('User joined chat', user)
          users.push(user)
        } else {
          console.log ('user already taken')
        }
    return module
})()

/*

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
*/
