module.exports.config = {
  name: "hotgirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "hotgirl photos",
  commandCategory: "Random-IMG",
  usages: "hotgirl dp",
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
"https://i.imgur.com/UF4nVxX.jpeg","https://i.imgur.com/FzMO6r4.jpeg","https://i.imgur.com/5n7CSaJ.jpeg","https://i.imgur.com/bX5kAgN.jpeg","https://i.imgur.com/AkVhUlu.jpeg","https://i.imgur.com/MiSQquK.jpeg","https://i.imgur.com/kjmOltv.jpeg","https://i.imgur.com/2G1YR9M.jpeg","https://i.imgur.com/UL2df9m.jpeg","https://i.imgur.com/IOFO529.jpeg","https://i.imgur.com/s2Imb7o.jpeg","https://i.imgur.com/eLmNKtb.jpeg","https://i.imgur.com/9YxhAdD.jpeg","https://i.imgur.com/Zn5q3bL.jpeg","https://i.imgur.com/voe5QtF.jpeg","https://i.imgur.com/hpRz6XS.jpeg","https://i.imgur.com/cEoNjG5.jpeg","https://i.imgur.com/vUtOrLN.jpeg","https://i.imgur.com/jiYFxBG.jpeg","https://i.imgur.com/nIVrcev.jpeg","https://i.imgur.com/6X3mDZx.jpeg","https://i.imgur.com/YNaYhqt.jpeg","https://i.imgur.com/MVHovaq.jpeg","https://i.imgur.com/eRlPUn0.jpeg","https://i.imgur.com/TSnaakq.jpeg","https://i.imgur.com/aDB48wp.jpeg","https://i.imgur.com/9afbBc0.jpeg","https://i.imgur.com/LuuMQeK.jpeg","https://i.imgur.com/85g3lBt.jpeg","https://i.imgur.com/rZ2mkBG.jpeg","https://i.imgur.com/G5gR3ty.jpeg","https://i.imgur.com/8TZPphw.jpeg"
         ];
         var callback = () => api.sendMessage({body:`★━━━━━━━━━━━━━★💜 𝐇𝐨𝐭 𝐌𝐰𝐥 🥵 💜 ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
          return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
       };
