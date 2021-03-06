/*CMD
  command: 💲Withdraw
  help: 
  need_reply: 
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
Bot.sendInlineKeyboard([ {title: "⚙️ Set Class", command: "⚙️Set Class" } ], "*❌ Class Not set*")
}else{
if (balance.value() < 100){
Bot.sendMessage("_❌ You have to own at least 100 POINTS !_")
}else{
Bot.sendMessage("*📤 Enter Amount of POINTS*")
Bot.runCommand("auto")
}
}}
