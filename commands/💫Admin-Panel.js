/*CMD
  command: ๐ซAdmin-Panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if ((user.telegramid == "1310317932" | user.telegramid == "944103445")) {
  var buttons = [
    [
      { title: "๐ฐAdd-Balance", command: "๐ฐAdd-Balance" },
      { title: "๐Mailing(Broadcast)", command: "๐Mailing(Broadcast)" }
    ],
    [
      { title: "User's Settings ๐ง", command: "User's Settings ๐ง" },
      { title: "Check Balance ๐ผ", command: "Check Balance ๐ผ" }
    ],
    [{ title: "Withdrawal Settings ๐  ", command: "Withdrawal Settings ๐ " }],
    [
      { title: "๐ธ  Ban User ๐", command: "Ban User ๐" },
      { title: "Unban User ๐", command: "Unban User ๐" }
    ],
[
      { title: "๐BACK", command: "๐BACK" },
    ]
  ]

  Bot.sendInlineKeyboard(buttons, "๐ฎโโ*Welcome Admin Panel*")
} else {
  Bot.sendMessage("*You Are Not Admin  โ*")
}
