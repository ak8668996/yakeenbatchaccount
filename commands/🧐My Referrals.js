/*CMD
  command: ð§My Referrals
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lib = Libs.ReferralLib

var refList = lib.currentUser.refList.get();

var msg;
if(refList.length>0){
  msg = "*Total users: " + refList.length + "\n\nâââââââââââââ\n*";
  for(var i in refList){
    user = refList[i];
    msg+= "*\nð¤ " +  user.first_name + " @" + user.username + "*";
  }
}else{
  msg = "*YOU DIDN'T REFERRED ANY USER ââ\n\nRead /refer If You don't Know How To Refer*";
}
Bot.sendMessage(msg);
