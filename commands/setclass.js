/*CMD
  command: setclass
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Send your Class And Stream address*

*If You Have Sent Earlier No Need To Set Again*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("Class")
User.setProperty("Class" , data.message ,"string")
Bot.sendMessage("*✅ Class And Stream set To :* "+data.message+"")
