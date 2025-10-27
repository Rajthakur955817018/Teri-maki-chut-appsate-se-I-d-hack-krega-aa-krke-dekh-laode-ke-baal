const fs = require('fs');
const path = require('path');

// Helper function to save config
const saveConfig = () => {
  try {
    const configPath = path.join(__dirname, '..', '..', 'config.json');
    fs.writeFileSync(configPath, JSON.stringify(global.config, null, 2));
    global.logger.system('Config saved successfully');
  } catch (error) {
    global.logger.error('Error saving config:', error);
  }
};

const messages = [
    { time: '12:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌 ⏳ 𝐒𝐨 𝐉𝐚𝐨 𝐁𝐚𝐛𝐲 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 🥀 ──── •💜• ────' },
    { time: '1:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 A𝐌 ⏳ 𝗧𝘂𝗺𝗵𝗮𝗿𝗮 𝐌𝗲𝗿𝗮 𝐒𝗶𝘃𝗮😘 ──── •💜• ────' },
    { time: '2:15 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 A𝐌 ⏳ 𝗧𝘂𝗺 𝗔𝗯𝗵𝗶 𝗧𝗮𝗸 𝗦𝗼𝘆𝗲 𝗡𝗵𝗶 😳 ──── •💜• ────' },
    { time: '3:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 A𝐌 ⏳ 𝐀𝐜𝐜𝐡𝐚 𝐡𝐨𝐠𝐚 𝐍𝐞𝐞𝐧𝐝 𝐀𝐚𝐣𝐚𝐲𝐞🌃 ──── •💜• ────' },
    { time: '4:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 A𝐌 ⏳ 𝐍𝐞𝐞𝐧𝐝 𝐀𝐚𝐣𝐚𝐲𝐞 🌃 ──── •💜• ────' },
    { time: '5:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝗔𝐌 ⏳ 𝐀𝐚𝐥𝐬𝐢😹 ──── •💜• ────' },
    // { time: '6:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 A𝐌 ⏳  ❤️🥀 💖 ──── •💜• ────' },
    { time: '7:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌 ⏳ 𝐔𝐭𝐡 𝐉𝐚𝐨 𝐀𝐛𝐡𝐢🥰 ──── •💜• ────' },
    { time: '8:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌 ⏳ 𝐔𝐭𝐡 𝐆𝐲𝐞 𝐏𝐫𝐞𝐬𝐢𝐝𝐞𝐧𝐭 𝐣𝐈 𝐀𝐚𝐩?😵 ──── •💜• ────' },
    { time: '9:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌 ⏳ 𝐁𝐫𝐞𝐚𝐤𝐟𝐚𝐬𝐭 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢 𝐁𝐚𝐛𝐲🙈 ──── •💜• ────' },
    { time: '10:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌 ⏳ 𝐀𝐚𝐥𝐬𝐢 𝐀𝐚𝐣 𝐂𝐨𝐥𝐥𝐞𝐠𝐞 𝐍𝐚𝐡𝐢 𝐆𝐚𝐲𝐞?🙀 ──── •💜• ────' },
    { time: '11:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 A𝐌 ⏳ 𝐌𝐮𝐣𝐡𝐞 𝐁𝐡𝐢 𝐘𝐚𝐚𝐝 𝐊𝐚𝐫 𝐋𝐢𝐲𝐚 𝐊𝐚𝐫𝐨😻 ──── •💜• ────' },
    { time: '12:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌 ⏳ 𝐆𝐨𝐨𝐝 𝐀𝐟𝐭𝐞𝐫𝐍𝐨𝐨𝐧 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞🌞 𝐊𝐢𝐭𝐧𝐢 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐁𝐚𝐡𝐚𝐫🥵 ──── •💜• ────' },
    { time: '1:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 𝐏𝐌 ⏳ 𝐋𝐮𝐧𝐜𝐡 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢😇 ──── •💜• ────' },
    { time: '2:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 𝐏𝐌 ⏳ 𝐁𝐨𝐥𝐨 𝐉𝐚𝐢 𝐒𝐡𝐫𝐞𝐞 𝐑𝐚𝐦 💖😇 ──── •💜• ────' },
    { time: '3:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 𝐏𝐌 ⏳ 𝐓𝐡𝐨𝐝𝐚 𝐀𝐚𝐫𝐚𝐦 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢😘 ──── •💜• ────' },
    { time: '4:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 𝐏𝐌 ⏳ 𝐁𝐚𝐡𝐮𝐭 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐀𝐚𝐣🥵 ──── •💜• ────' },
    { time: '5:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝐏𝐌 ⏳ 𝐇𝐚𝐫 𝐇𝐚𝐥 𝐌𝐞 𝐇𝐚𝐦𝐞𝐬𝐡𝐚 𝐊𝐡𝐮𝐬𝐡 𝐑𝐚𝐡𝐨 😇 ──── •💜• ────' },
    { time: '6:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 𝐏𝐌 ⏳ 𝐁𝐨𝐥𝐨 𝐒𝐚𝐭𝒚 𝐌𝐞 𝐉𝐚𝐢𝐭𝐞 𝐇 𝐒𝐚𝐧𝐚𝐭𝐚𝐧 𝐃𝐡𝐚𝐫𝐦 💖 ──── •💜• ────' },
    { time: '7:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 𝐏𝐌 ⏳ 𝐊𝐡𝐮𝐬𝐡 𝐑𝐚𝐡𝐧𝐚 𝐌𝐞𝐫𝐚 𝐏𝐫𝐨𝐦𝐢𝐬𝐞 💞 ──── •💜• ────' },
    { time: '8:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 𝐏𝐌 ⏳ 𝐃𝐢𝐧𝐧𝐞𝐫 𝐊𝐚𝐫𝐥𝐨 𝐒𝐚𝐫𝐞 😋 ──── •💜• ────' },
    { time: '9:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 𝐏𝐌 ⏳ 𝐌𝐞𝐫𝐞 𝐂𝐮𝐭𝐞 𝐁𝐚𝐛𝐲 💞 ──── •💜• ────' },
    { time: '10:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 𝐏𝐌 ⏳ 𝐓𝐮𝐦 𝐌𝐮𝐬𝐤𝐮𝐫𝐚𝐨 𝐇𝐚𝐬𝐨 𝐇𝐚𝐦𝐞𝐬𝐡𝐚 ☺️ ──── •💜• ────' },
    { time: '11:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 𝐏𝐌 ⏳ 𝐁𝐛𝐲 𝐊𝐡𝐚𝐧𝐚 𝐊𝐡𝐚𝐲𝐚 𝐀𝐚𝐩𝐧𝐞? ──── •💜• ────' }
];

module.exports = {
  config: {
    name: 'autosend',
    aliases: ['auto', 'autopost'],
    description: 'Toggle autosend feature on/off',
    usage: '{prefix}autosend [on/off]',
    credit: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
    hasPrefix: true,
    permission: 'ADMIN',
    cooldown: 5,
    category: 'ADMIN'
  },

  run: async function({ api, message, args }) {
    const { threadID, messageID, senderID } = message;
    
    if (args.length === 0) {
      const status = global.config.autosend?.enabled ? 'ON' : 'OFF';
      const interval = global.config.autosend?.checkIntervalMinutes || 1;
      const istTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
      return api.sendMessage(
        `🤖 **AutoSend Status:** ${status}\n` +
        `⏰ **Check Interval:** ${interval} minute(s)\n\n` +
        `Current IST Time: ${istTime.toLocaleString()}\n\n` +
        `Usage:\n` +
        `• ${global.config.prefix}autosend on - Enable autosend\n` +
        `• ${global.config.prefix}autosend off - Disable autosend\n\n` +
        `📝 AutoSend sends scheduled messages to all threads with random images from modules/commands/autosend/ folder.`,
        threadID,
        messageID
      );
    }

    const action = args[0].toLowerCase();
    
    if (action === 'on') {
      if (global.config.autosend?.enabled) {
        return api.sendMessage('✅ AutoSend is already enabled!', threadID, messageID);
      }
      
      // Update config
      if (!global.config.autosend) {
        global.config.autosend = {};
      }
      global.config.autosend.enabled = true;
      saveConfig();
      
      this.startAutoSend(api);
      return api.sendMessage(
        '✅ **AutoSend Enabled!**\n\n' +
        '🕐 Bot will now send scheduled messages to all threads with random images.\n' +
        '📁 Make sure to add images to modules/commands/autosend/ folder.',
        threadID,
        messageID
      );
      
    } else if (action === 'off') {
      if (!global.config.autosend?.enabled) {
        return api.sendMessage('❌ AutoSend is already disabled!', threadID, messageID);
      }
      
      // Update config
      global.config.autosend.enabled = false;
      saveConfig();
      
      this.stopAutoSend();
      return api.sendMessage('❌ **AutoSend Disabled!**', threadID, messageID);
      
    } else {
      return api.sendMessage(
        '❌ Invalid option! Use "on", "off", or "test".',
        threadID,
        messageID
      );
    }
  },

  /**
   * Initialize autosend when bot starts
   */
  init: function(api) {
    // Initialize global autoSend object
    if (!global.autoSend) {
      global.autoSend = {
        enabled: false,
        interval: null,
        api: api
      };
    }
    
    // Initialize autosend config if not exists
    if (!global.config.autosend) {
      global.config.autosend = {
        enabled: true,
        checkIntervalMinutes: 1
      };
      saveConfig();
    }
    
    // Start autosend if enabled in config
    if (global.config.autosend.enabled) {
      this.startAutoSend(api);
      global.logger.system('AutoSend initialized and started');
    } else {
      global.logger.system('AutoSend initialized but disabled in config');
    }
  },

  /**
   * Start the autosend scheduler
   */
  startAutoSend: function(api) {
    if (global.autoSend?.interval) {
      clearInterval(global.autoSend.interval);
    }

    // Get interval from config (default 1 minute)
    const intervalMinutes = global.config.autosend?.checkIntervalMinutes || 1;
    const intervalMs = intervalMinutes * 60 * 1000;

    global.autoSend = {
      enabled: true,
      api: api,
      interval: setInterval(() => {
        // Only send if autosend is still enabled in config
        if (global.config.autosend?.enabled) {
          this.sendHourlyMessage(api);
        }
      }, intervalMs)
    };

    // Send message immediately when started
    setTimeout(() => {
      if (global.config.autosend?.enabled) {
        this.sendHourlyMessage(api);
      }
    }, 5000); // Wait 5 seconds after start
    
    global.logger.system(`AutoSend scheduler started with ${intervalMinutes} minute interval`);
  },

  /**
   * Stop the autosend scheduler
   */
  stopAutoSend: function() {
    if (global.autoSend?.interval) {
      clearInterval(global.autoSend.interval);
      global.autoSend.interval = null;
    }
    global.autoSend.enabled = false;
  },

  /**
   * Send hourly message to all threads
   */
  sendHourlyMessage: async function(api) {
    try {
      // Get current time in Asia/Kolkata timezone
      const now = new Date();
      const istTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
      const currentHour = istTime.getHours();
      const currentMinute = istTime.getMinutes();
      
      global.logger.system(`AutoSend check - Current IST time: ${istTime.toLocaleString()} (Hour: ${currentHour}, Minute: ${currentMinute})`);
      
      // Format current time to match message time format (H:MM AM/PM)
      let currentTimeStr;
      if (currentHour === 0) {
        currentTimeStr = `12:${currentMinute.toString().padStart(2, '0')} AM`;
      } else if (currentHour < 12) {
        currentTimeStr = `${currentHour}:${currentMinute.toString().padStart(2, '0')} AM`;
      } else if (currentHour === 12) {
        currentTimeStr = `12:${currentMinute.toString().padStart(2, '0')} PM`;
      } else {
        currentTimeStr = `${currentHour - 12}:${currentMinute.toString().padStart(2, '0')} PM`;
      }
      
      // Find matching message for the exact current time
      const messageData = messages.find(msg => msg.time === currentTimeStr);
      if (!messageData) {
        // No message scheduled for this exact time - log and return silently
        return;
      }
      
      global.logger.system(`Found scheduled message for time: ${currentTimeStr}`);
      

      // Get random image from autosend folder
      const imagePath = this.getRandomImage();
      
      // Get all threads
      const threadList = await new Promise((resolve, reject) => {
        global.Thread.find({}, 'threadID', (err, threads) => {
          if (err) reject(err);
          else resolve(threads.map(thread => ({ threadID: thread.threadID })));
        });
      });

      let sentCount = 0;
      let errorCount = 0;

      // Send message to each thread
      for (const thread of threadList) {
        try {
          const messageOptions = {
            body: messageData.message
          };

          // Add image if available
          if (imagePath) {
            messageOptions.attachment = fs.createReadStream(imagePath);
          }

          await new Promise((resolve, reject) => {
            api.sendMessage(messageOptions, thread.threadID, (err, info) => {
              if (err) reject(err);
              else resolve(info);
            });
          });

          sentCount++;
          
          // Add delay between messages to avoid spam detection
          await new Promise(resolve => setTimeout(resolve, 1000));
          
        } catch (error) {
          errorCount++;
          global.logger.error(`Error sending autosend to thread ${thread.threadID}:`, error);
        }
      }

      global.logger.system(`AutoSend completed: ${sentCount} sent, ${errorCount} failed for time ${currentTimeStr}`);
      
    } catch (error) {
      global.logger.error('Error in sendHourlyMessage:', error);
    }
  },

  /**
   * Get random image from autosend folder
   */
  getRandomImage: function() {
    try {
      const imageFolderPath = path.join(__dirname, 'cache', 'autosend');
      
      if (!fs.existsSync(imageFolderPath)) {
        global.logger.warn('AutoSend image folder does not exist at: ' + imageFolderPath);
        return null;
      }

      const imageFiles = fs.readdirSync(imageFolderPath)
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
      
      if (imageFiles.length === 0) {
        global.logger.warn('No images found in autosend folder: ' + imageFolderPath);
        return null;
      }

      const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
      const fullImagePath = path.join(imageFolderPath, randomImage);
      global.logger.system(`Selected random image: ${randomImage}`);
      return fullImagePath;
      
    } catch (error) {
      global.logger.error('Error getting random image:', error);
      return null;
    }
  }
};
        
