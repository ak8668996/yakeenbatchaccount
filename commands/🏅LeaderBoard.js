/*CMD
  command: 🏅LeaderBoard
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
  var msg = "*🔥Top 10 refer Doing People 🔥 :*\n\n"
  var users = Libs.ReferralLib.topList.get(10)

  for (var index in users) {
    var u = users[index]
    msg += "*@" + u.username+" "+ u.count +"\n*"
  }

  Bot.sendMessage(msg)
