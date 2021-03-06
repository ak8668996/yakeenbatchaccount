/*CMD
  command: 💌Mailing(Broadcast)
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *✅ Enter Your Message*
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1310317932 | user.telegramid == 944103445){
let msg = "💌 Admin Message : \n\n" + data.message
Bot.sendMessageToAllPrivateChats(msg)
Bot.sendMessage("✅Message sent to all active members")
}else{
Bot.sendMessage("❌ Not admin")
}
