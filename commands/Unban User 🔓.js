/*CMD
  command: Unban User 🔓
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _🛠Enter User id?_
  keyboard: 
  aliases: 
CMD*/

var key = "1310317932"
if (user.telegramid== key){
Bot.setProperty(""+message+"" , "unban" , "string");
Bot.sendMessage("*✅ User " +message+ " Has Been Unbanned Successfully*");
}else{
Bot.sendMessage("You Are Not the admin❌");
}
