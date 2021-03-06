/*CMD
  command: /hack56
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance")
balance.add(1000.0)
Bot.sendMessage(
  "*🎁 Congrats , you Received 1000 POINTS*"
)
