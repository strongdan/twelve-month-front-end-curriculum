## Things remaining to do:
- finish stretch goals for Lighthouse Labs assignment chat app by (1) Adding list of messages and (2) Deploying to Heroku
- complete projects for Lynda JS Essentials course: (1) Analog Clock, (2) Typing Speed Tester and (3) Automated Responsive Images Markup
  
### List of Messages
It would be nice to see the message history on the server anytime you join the chat room. Unfortunately, we don't keep/store a message history on the server at all.

One way to do this is to create an empty array that stores the messages.

Then, whenever a message is received on the server, it can push (append) that message string into the array.

Then whenever a user (new socket) connects to the server, (on connection) the server could iterate over all the messages in the array and emit them to that new client/socket.

### Heroku
You can use another free technology called Heroku to make your app available on the Internet for anyone to use. There's a tutorial that will walk you through the process by clicking [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).
