/*CMD
  command: checkpass
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _Send Password_
  keyboard: 
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("TRXwallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(data.message < 1310317932 ){
Bot.sendMessage("_❌ You Have Entered Wrong Password_")
}else{
if(data.message > balance.value()){
Bot.sendMessage("_❌ Maximum withdraw "+balance.value().toFixed(6)+" PHP_")
}else{
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("**")
balance.add(-0)
Api.sendMessage({ 
chat_id: "@VedantuGiveawayproofs", 
text: "*🔋 New Approved Payout\n\n▪️ Status : Pending\n▪️ User Id :* "+user.telegramid+"\n*▪️ User :*@"+user.username+"\n*▪️Total users Invited ::* "+refList.length+"\n*▪️ Amount :* "+data.message+" POINTS\n\n*♦️ Paid Address ♦️\n "+wallet+"\n\n✅ Bot @VedantuAccountBot*" , 
parse_mode: "Markdown"})
}
}
