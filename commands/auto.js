/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {

var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var wallet = User.getProperty("Class")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    
  } else {
  }
var history = User.getProperty("history")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var amount = message
  if (history == undefined) {
    var newh =
      "\n" +
      "✅ Withdraw Amount : " +
      amount +
      "POINTS" +
      "\n⚕DATE " +
      time
    User.setProperty("history", newh, "string")
  } else {
    var nwh =
      "➖➖➖➖➖➖➖➖➖➖➖➖➖\n@"+bot.name+"" +
      "\n✅ Withdraw Amount : " +
      amount +
      "POINTS" +
      "\n⚕ DATE " +
      time
    var toal = nwh + history
    User.setProperty("history", toal, "string")
  }
  if (message < 100) {
    Bot.sendMessage("_❌ Minimum Withdraw 100 POINTS_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Withdraw " + balance.value().toFixed(6) + " POINTS_"
      )
    } else {
      Bot.sendMessage(
        "*✅ Withdrawal Requested Successfully\nFor Account Details Check Below\n\n💳 Transaction Details = \n 💰Amount = " +
          message +
          " POINTS\n💼 Class* = " +
          wallet +
          "\n\n*Join The Below Group 👇🏻*\n\n*https://t.me/joinchat/9_xHACbYcP1jYWM1*\n\n*Read The Steps In That Group\n\n Don't Share The Link To Others Otherwise You Will Be Permanently Banned 🚫*\n\n*🌹 Proof Channel : @YakeenBatchAccountsPro*of")
        parse_mode: "Markdown"
      balance.add(-message)
      Api.sendMessage({
        chat_id: "@YakeenBatchAccountsProof",
        text:
          "*🔋 New Withdraw Requested 🏦\n\n▪️ Status = Automatically Given ✅\n▪️ User =* " +
          user_link +
          "*\n▪️ User ID = " +
          user.telegramid +
          "\n▪️ Amount = " +
          message +
          " POINTS\n▪️ User Referrals = " +
          refList.length +
          "\n\n💳 Class =\n " +
          wallet +
          "\n\n👮🏻‍♂ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown"
     })
    }
  }
}

Bot.runCommand("Cr")
