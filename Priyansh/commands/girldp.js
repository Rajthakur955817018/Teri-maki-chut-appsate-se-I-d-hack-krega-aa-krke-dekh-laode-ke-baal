module.exports.config = {
  name: "girldp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Girl Dp photos",
  commandCategory: "Random-IMG",
  usages: "girl dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [ 
"https://i.imgur.com/LnX8oCz.jpeg","https://i.imgur.com/ZBVPBXy.jpeg","https://i.imgur.com/Kp4ybLY.jpeg","https://i.imgur.com/D49XvEC.jpeg","https://i.imgur.com/MO9lWSV.jpeg","https://i.imgur.com/butCIte.jpeg","https://i.imgur.com/EycBt9T.jpeg","https://i.imgur.com/mbM6sR2.jpeg","https://i.imgur.com/f6zIScC.jpeg","https://i.imgur.com/SToGR5T.jpeg","https://i.imgur.com/ryvNNUO.jpeg","https://i.imgur.com/OKYHSry.jpeg","https://i.imgur.com/9A2WClu.jpeg","https://i.imgur.com/mStvUvV.jpeg","https://i.imgur.com/Vv4NT1E.jpeg","https://i.imgur.com/nxcWRxY.jpeg","https://i.imgur.com/LZqLP9I.jpeg","https://i.imgur.com/x1xReAV.jpeg","https://i.imgur.com/oitkhg7.jpeg","https://i.imgur.com/pZ6RGBk.jpeg","https://i.imgur.com/zejk2Am.jpeg","https://i.imgur.com/xp50cS9.jpeg","https://i.imgur.com/RlrMumO.jpeg"

     ];
     var callback = () => api.sendMessage({body:`★━━━━━━━━━━━━━★🍂 𝐆𝐢𝐫𝐥 𝐃𝐩  🍂★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
