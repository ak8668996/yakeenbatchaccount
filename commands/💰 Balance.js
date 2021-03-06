/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var button = [{ title : "💲Withdraw" , command : " /withdraw_money " }];
Bot.sendInlineKeyboard(button ,"*🤴 User : "+user.first_name+"\n\n❌ Username : @"+user.username+"\n\n💰 Balance : "+balance.value().toFixed(2)+" POINTS\n\n💵 Minimum Withdraw 100 Points 💵\n\n\⚜️Refer More And Earn More⚜️*")
