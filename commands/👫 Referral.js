/*CMD
  command: ð« Referral
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
  caption: "*ð  Welcome To Invite And Earn System!\n\nâï¸ Per Referral You Will Get 10 POINTS\n\nâªï¸Choose A Option From Below ð»*",
  parse_mode:"markdown",

  reply_markup: { inline_keyboard: [
    [
      // run command /onButton2 on button pressing
      { text: "ð¹ Generate Referral Link", callback_data: "ð« Referral 1" }
    ],
    [
       { text: "ð My Referrals ð", callback_data: "/referlist" }
    ]
  ]}
});
