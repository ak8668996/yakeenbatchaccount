/*CMD
  command: 👫 Referral
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendPhoto({
  photo: "https://telegra.ph/file/a2ff4ad9cdce9db913820.png", // it is picture!
  caption: "*🏠 Welcome To Invite And Earn System!\n\n⛔️ Per Referral You Will Get 10 POINTS\n\n▪️Choose A Option From Below 🔻*",
  parse_mode:"markdown",

  reply_markup: { inline_keyboard: [
    [
      // run command /onButton2 on button pressing
      { text: "💹 Generate Referral Link", callback_data: "👫 Referral 1" }
    ],
    [
       { text: "📑 My Referrals 📑", callback_data: "/referlist" }
    ]
  ]}
});
