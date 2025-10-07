module.exports.config = {
  name: "Russian",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Russian girl",
  commandCategory: "Random-IMG",
  usages: "Russian girl dp",
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
    var link = [ "https://i.imgur.com/IVi0hxB.jpeg","https://i.imgur.com/kYNzNug.jpeg","https://i.imgur.com/u2E62U2.jpeg","https://i.imgur.com/VFCUtnv.jpeg","https://i.imgur.com/gu3sdqx.jpeg","https://i.imgur.com/UBwpR0c.jpeg","https://i.imgur.com/3MF47qS.jpeg","https://i.imgur.com/zYgWma2.jpeg","https://i.imgur.com/oet4Nw0.jpeg","https://i.imgur.com/eTm5TPF.jpeg","https://i.imgur.com/JLLU0A9.jpeg","https://i.imgur.com/Vm8OuhA.jpeg","https://i.imgur.com/HyL4kH2.jpeg","https://i.imgur.com/XJpcnjx.jpeg","https://i.imgur.com/Or5n4zm.jpeg","https://i.imgur.com/XUVle1l.jpeg","https://i.imgur.com/Padx9P9.jpeg","https://i.imgur.com/ZRrg3Gr.jpeg","https://i.imgur.com/oehvHSN.jpeg","https://i.imgur.com/tezYvXD.jpeg","https://i.imgur.com/HcQLsMO.jpeg","https://i.imgur.com/PZIEEYx.jpeg","https://i.imgur.com/JoDtibb.jpeg","https://i.imgur.com/u3ch5EV.jpeg","https://i.imgur.com/n2TTxuy.jpeg","https://i.imgur.com/9cOEi4B.jpeg","https://i.imgur.com/dfLhYfz.jpeg"
        ];
     var callback = () => api.sendMessage({body:`★━━━━━━━━━━━━━★💜 𝐑𝐮𝐬𝐬𝐢𝐚𝐧 𝐠𝐢𝐫𝐥 💜 ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };

