/*CMD
  command: /help
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [
      { title: "📮 Channel", url : "https://t.me/StudyTime_Channel" },
      { title: "🔄 Updates", url : "https://t.me/YakeenBatchAccountsProof" }
    ],
    [
      { title: "📞Support", command: "📞Support1" },
      { title: "📊Statistics", command: "📊Statistics" }
    ],
    [{ title: "Start The Bot 😉", command: "/start" }],
[
      { title: "🔙BACK", command: "🔙BACK" },
    ]
  ]

  Bot.sendInlineKeyboard(buttons, "*📖Help\n\nHi "+user.first_name+" , Welcome To Yakeen Baatch Account Giveaway Bot. You can use me to get free physicswallah yakeen batch account.\n\nA Small guide on how to use me :\n\n1.In Order To Start The Bot You Must Have To Join All The Mentioned Channels.\n2. After Joining All The Channels Click ⚜️ Joined ⚜️ Button . You Will Get A Signup Bonus.\n3. Now you have to collect the required points by referring the bot to other users.\n4. As soon you reach the minimum points you can withdraw them and use to get free lectures.\n\n📊 For more details you can check the following commands :\n\n/refer - How to refer the bot to other users\n/withdraw - How to withdraw points to get free lectures\n/balance - How to check balance\n/setclass- How to set class*")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
