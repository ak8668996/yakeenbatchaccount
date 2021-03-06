/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.sendKeyboard(
    "👤My Account,💵Earn Points\n🏅LeaderBoard,🧐My Referrals\n💫Earn-Extra\n📞Support , 📊Statistics , Bot Guide 📖",
    "*〽️Refer And Earn Points\n\n100 Points = 5 Chapters (Any)*"
  )
Bot.runCommand("reff")
}
if (user == "left") {
  Bot.runCommand("/start")
}
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
