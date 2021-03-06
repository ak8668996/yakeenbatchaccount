/*CMD
  command: ⚙️Set Class
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("Class")
var button = [{ title : "Set Class ✏" , command : "setclass" }]
Bot.sendInlineKeyboard(button , "*Account Settings ⚙\n\n🤴 User : "+user.first_name+"\n🆔 User ID : "+user.telegramid+"\n💼 Class :* "+wallet+"\n\n*If You're Class Is Undefined Set It By Clicking The Button Below\n\nNote: Class has no relation with yakeen batch account but still you have to fill.*")
