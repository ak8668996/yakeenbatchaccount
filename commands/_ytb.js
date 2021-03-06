/*CMD
  command: /ytb
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
      { title: "📲 Subscribe", url : "https://www.youtube.com/channel/UCm3j7FEZ8O5jCtCxhdwhv7w" },
    ],
      [{ title: "☑️ Check", command: "main_menu" },
    ]
  ]
Bot.sendMessage("*❌ Subscribe Not Found . Try Again By Subscribing*")
Bot.sendInlineKeyboard(buttons ,"*☑️ Subscribe to Our Youtube Channel  And Click On 'Check' Button To Check.\n\nSubscribe By Clicking The Button Below👇👇*")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
