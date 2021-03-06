/*CMD
  command: /withdraw_money
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("Class")
if( wallet == undefined ){
Bot.sendInlineKeyboard([ {title: "⚙️ Set Class", command: "⚙️Set Class1" } ], "*❌ Class Not set*")
}else{
if (balance.value() < 100){
Bot.sendMessage("_❌ You have to own at least 100 POINTS !_")
}else{
Bot.sendMessage("*📤 Enter Amount of POINTS*")
Bot.runCommand("auto")
}
}}
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
