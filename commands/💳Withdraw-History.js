/*CMD
  command: π³Withdraw-History
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var his = User.getProperty("history")
if(his == undefined){
var go ="*π Your All Withdrawal"+"\n\nβββββββββββββ"+"\n\nNo withdraw Found*";
Bot.sendMessage(go)
}else{
Bot.sendMessage("π Your All Withdrawal\n\n"+his)
}
