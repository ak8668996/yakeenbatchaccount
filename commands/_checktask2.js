/*CMD
  command: /checktask2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var task2check = User.getProperty("task2check");
var user = options.result.status;
User.setProperty("status" , user, "string");
if (task2check == undefined){
if (user=="member" | user =="administrator" | user=="creator"){
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(5)
User.setProperty("task2check", Date.now(), "integer")
Bot.sendMessage(
  "*🎁 Congrats , you Received 5 POINTS as A Sign Up Bonus*"
)
User.addToGroup("user")
Bot.runCommand("main_menu")
}

if (user=="left"){
Bot.sendMessage("*❌ Must join channel*")
}}else{
Bot.sendMessage("*❌ You Have Already Received A Sign Up Bonus!!*")
}
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

Bot.runCommand("main_menu")
