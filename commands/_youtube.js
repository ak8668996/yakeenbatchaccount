/*CMD
  command: /youtube
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [
      { title: "๐ฒ Subscribe", url : "https://www.youtube.com/channel/UCm3j7FEZ8O5jCtCxhdwhv7w" },
    ],
      [{ title: "โ๏ธ Check", command: "/ytb" },
    ]
  ]
Bot.sendInlineKeyboard(buttons ,"*โ๏ธ Subscribe to Our Youtube Channel  And Click On 'Check' Button To Check.\n\nSubscribe By Clicking The Button Below๐๐*")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
