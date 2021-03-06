/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title : "⚜️ Joined ⚜️" , command : "⚜️ Joined ⚜️" }]
Bot.sendInlineKeyboard(button , "*🛡 You Must Have To Subscribe These Channels If You Want To Start The Bot And Get Free Lectures : \n\n➡️ @StudyTime_Channel \n➡️ @physicswallah_official \n➡️ @NeetJeeFactory \n➡️ @YakeenBatchAccountsProof\n\n☑️You must subscribe our YouTube channel :- \n\nhttps://www.youtube.com/channel/UCm3j7FEZ8O5jCtCxhdwhv7w \n\nAfter doing all the steps click '⚜️ Joined ⚜️' Button To Start The Bot*")
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite Your Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
 balance.add(0)
Bot.sendMessageToChatWithId(refUser.chatId, "*🏧 New Referral : +10 POINTS When Your Referal Join all the Channels*");
}

function doAlreadyAttracted(){
  Bot.sendMessage("*You Already Started The Bot ❌*");
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)

Bot.sendMessageToChatWithId(1310317932, "*🚦New User🚦*\n\n*⚜️ User = "+user.first_name+"\n🔰 Username = @"+user.username+"\n🆔 User ID = "+user.telegramid+"\n📛 User Link = *["+user.firstname+"](tg://user?id="+user.telegramid+")")
