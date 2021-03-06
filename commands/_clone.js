/*CMD
  command: /clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send BB Email
  keyboard: 
  aliases: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id:  223792 
})
Bot.sendMessage("done")
