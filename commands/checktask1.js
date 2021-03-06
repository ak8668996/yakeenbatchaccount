/*CMD
  command: checktask1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var task1check = User.getProperty("task1check");
var user = options.result.status;
User.setProperty("status" , user, "string");
if (task1check == undefined){
if (user=="member" | user =="administrator" | user=="creator"){
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(3)
User.setProperty("task1check", Date.now(), "integer")
Bot.sendMessage(
  "*🎁 Congrats , you Received 3 POINTS as A Sign Up Bonus\n\nComplete The Below Step To Start The Bot*"
)
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*❌ Must join channel*")
}}else{
Bot.sendMessage("*❌ You Have Already Received A Sign Up Bonus!!\n\nComplete The Below Step To Start The Bot*")
}
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

Bot.runCommand("/youtube")
