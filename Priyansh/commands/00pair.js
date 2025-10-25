/**

 * Pair Command

 * Match users based on opposite gender with visual canvas

 */

 

const fs = require('fs');

const path = require('path');

const axios = require('axios');

const { createCanvas, loadImage } = require('canvas');

 

module.exports = {

  config: {

    name: 'pair',

    aliases: ['match', 'couple'],

    description: 'Find your perfect match based on gender preferences',

    usage: '{prefix}pair',

    credit: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',

    hasPrefix: true,

    permission: 'PUBLIC',

    cooldown: 5,

    category: 'FUN'

  },

 

  run: async function({ api, message, args }) {

    const { threadID, messageID, senderID } = message;

 

    try {

      // Get sender info using getUserInfo API

      const senderInfo = await api.getUserInfo(senderID);

      if (!senderInfo || !senderInfo[senderID]) {

        return api.sendMessage("❌ Your profile data not found. Please try again later.", threadID, messageID);

      }

 

      const senderData = senderInfo[senderID];

      console.log(senderData);

      const senderGender = senderData.gender;

      const senderName = senderData.name || "Unknown User";

 

      // Determine target gender (opposite gender)

      let targetGender;

      // Check for female gender (1 or 'female')

      if (senderGender === 1 || senderGender === 'FEMALE') {

        targetGender = [2, 'MALE']; // Looking for male users

      } 

      // Check for male gender (2 or 'male')

      else if (senderGender === 2 || senderGender === 'MALE') {

        targetGender = [1, 'FEMALE']; // Looking for female users

      } else {

        return api.sendMessage("❌ Your gender data is not clear. Please update your profile.", threadID, messageID);

      }

 

      // Get all thread members except sender

      const threadInfo = await api.getThreadInfo(threadID);

      const participantIDs = threadInfo.participantIDs.filter(id => id !== senderID);

 

      if (participantIDs.length === 0) {

        return api.sendMessage("❌ No other members found in this group to match with.", threadID, messageID);

      }

 

      // Find users with opposite gender

      const potentialMatches = [];

      for (const userID of participantIDs) {

        try {

          const userInfo = await api.getUserInfo(userID);

          if (userInfo && userInfo[userID]) {

            const userData = userInfo[userID];

            const userGender = userData.gender;

            

            // Check if user has opposite gender

            if (targetGender.includes(userGender)) {

              potentialMatches.push({

                userID: userID,

                name: userData.name || "Unknown User",

                gender: userGender

              });

            }

          }

        } catch (error) {

          console.log(`[pair] Could not get info for user ${userID}`);

        }

      }

 

      if (potentialMatches.length === 0) {

        const genderText = targetGender.includes(1) || targetGender.includes('female') ? "female" : "male";

        return api.sendMessage(`❌ No ${genderText} member found in this group to pair with you.`, threadID, messageID);

      }

 

      // Select random match from potential matches

      const randomMatch = potentialMatches[Math.floor(Math.random() * potentialMatches.length)];

      const matchPercentage = Math.floor(Math.random() * 40) + 60; // Random percentage 60-99%

 

      // Get random pair image from cache folder

      const pairImagesPath = path.join(__dirname, 'cache', 'pairs');

      const pairImages = fs.readdirSync(pairImagesPath).filter(file => 

        file.endsWith('.png') || file.endsWith('.gif') || file.endsWith('.jpg')

      );

 

      if (pairImages.length === 0) {

        return api.sendMessage("❌ Pair images not found in cache folder.", threadID, messageID);

      }

 

      const randomPairImage = pairImages[Math.floor(Math.random() * pairImages.length)];

      const pairImagePath = path.join(pairImagesPath, randomPairImage);

 

      // Download profile pictures

      const senderProfileUrl = `https://graph.facebook.com/${senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

      const matchProfileUrl = `https://graph.facebook.com/${randomMatch.userID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

 

      // Create temp paths

      const tempDir = path.join(__dirname, 'temp');

      if (!fs.existsSync(tempDir)) {

        fs.mkdirSync(tempDir, { recursive: true });

      }

 

      const senderProfilePath = path.join(tempDir, `sender_${senderID}.jpg`);

      const matchProfilePath = path.join(tempDir, `match_${randomMatch.userID}.jpg`);

      const outputPath = path.join(tempDir, `pair_${Date.now()}.png`);

 

      // Download images

      await downloadImage(senderProfileUrl, senderProfilePath);

      await downloadImage(matchProfileUrl, matchProfilePath);

 

      // Load background image first to get dimensions

      const pairImage = await loadImage(pairImagePath);

      

      // Create canvas with background image dimensions

      const canvas = createCanvas(pairImage.width, pairImage.height);

      const ctx = canvas.getContext('2d');

 

      // Load profile images

      const senderProfile = await loadImage(senderProfilePath);

      const matchProfile = await loadImage(matchProfilePath);

 

      // Draw background image first

      ctx.drawImage(pairImage, 0, 0, pairImage.width, pairImage.height);

 

      // Optimized for 1920x1080 resolution

      const canvasWidth = pairImage.width;

      const canvasHeight = pairImage.height;

      

      // Much larger circle radius for better visibility on HD images

      const circleRadius = 230; // Increased from 120 to 180px

      const margin = 350; // Tripled from 150 to 450px for more padding

      

      // Position circles for 1920x1080 layout with increased padding

      const leftCircleX = margin;

      const rightCircleX = canvasWidth - margin;

      const circleY = canvasHeight / 2;

 

      // Enhanced border designs for 1920x1080 resolution

      const borderDesigns = [

        { color: '#FF69B4', width: 8, style: 'solid' },

        { color: '#FF1493', width: 10, style: 'double' },

        { color: '#FFB6C1', width: 7, style: 'dashed' },

        { color: '#FF6347', width: 9, style: 'gradient' },

        { color: '#DA70D6', width: 8, style: 'rainbow' },

        { color: '#FF4500', width: 12, style: 'glow' },

        { color: '#DC143C', width: 6, style: 'hearts' },

        { color: '#B22222', width: 8, style: 'stars' },

        { color: '#9932CC', width: 10, style: 'neon' },

        { color: '#FF1493', width: 8, style: 'sparkle' }

      ];

 

      const leftDesign = borderDesigns[Math.floor(Math.random() * borderDesigns.length)];

      const rightDesign = borderDesigns[Math.floor(Math.random() * borderDesigns.length)];

 

      // Draw sender profile (left circle)

      drawCircularProfile(ctx, senderProfile, leftCircleX, circleY, circleRadius, leftDesign);

 

      // Draw match profile (right circle)

      drawCircularProfile(ctx, matchProfile, rightCircleX, circleY, circleRadius, rightDesign);

 

      // Save canvas to file

      const buffer = canvas.toBuffer('image/png');

      fs.writeFileSync(outputPath, buffer);

 

      // Random pair messages

      const pairMessages = [

       `😐 मैंने सुना हु तू चमार है 🙊\n\nThis साबुन सराफ से धो दूंगा धोबी के जैसा 🫨`,

       

       `😬 और अनार के छिलके 🥱\n\nThe क्या मिलता है ने ढक्कन pair करने से घर में तेरे काम नहीं है तो आज मेरे घर का गोबर साफ कर 😆🥱`,

       

       `😑भालू काट लेगा तुझे 🦍\n\nThe तुझे भालू बिल्ली कुत्ता नहीं बचा पाएगा🤧😂`,

     ];

 

     const randomMessage = pairMessages[Math.floor(Math.random() * pairMessages.length)];

 

     const finalMessage = `${randomMessage}\n\n💑 ${senderName} + ${randomMatch.name} 💑\n\nCompatibility: ${matchPercentage}%`;

 

     // Ensure participants are mentioned correctly

     const mentions = [

       { tag: `${senderName}`, id: senderID },

       { tag: `${randomMatch.name}`, id: randomMatch.userID }

     ];

 

     // Send the pair image

     api.sendMessage({

       body: finalMessage,

       attachment: fs.createReadStream(outputPath),

       mentions: mentions

     }, threadID, () => {

       // Clean up temp files

       cleanupFiles([senderProfilePath, matchProfilePath, outputPath]);

     }, messageID);

 

   } catch (error) {

     console.error('[pair] Error:', error);

     api.sendMessage("❌ Error occurred while creating pair. Please try again later.", threadID, messageID);

   }

 }

};

 

// Helper function to download images

async function downloadImage(url, filepath) {

 const response = await axios({

   method: 'GET',

   url: url,

   responseType: 'stream'

 });

 

 const writer = fs.createWriteStream(filepath);

 response.data.pipe(writer);

 

 return new Promise((resolve, reject) => {

   writer.on('finish', resolve);

   writer.on('error', reject);

 });

}

 

// Helper function to draw circular profile with custom border designs

function drawCircularProfile(ctx, profileImage, x, y, radius, design) {

 // Draw profile image in circle

 ctx.save();

 ctx.beginPath();

 ctx.arc(x, y, radius, 0, Math.PI * 2);

 ctx.closePath();

 ctx.clip();

 ctx.drawImage(profileImage, x - radius, y - radius, radius * 2, radius * 2);

 ctx.restore();

 

 // Draw border based on design style

 switch (design.style) {

   case 'solid':

     ctx.strokeStyle = design.color;

     ctx.lineWidth = design.width;

     ctx.beginPath();

     ctx.arc(x, y, radius, 0, Math.PI * 2);

     ctx.stroke();

     break;

 

   case 'double':

     // Inner border

     ctx.strokeStyle = design.color;

     ctx.lineWidth = design.width / 2;

     ctx.beginPath();

     ctx.arc(x, y, radius - design.width, 0, Math.PI * 2);

     ctx.stroke();

     // Outer border

     ctx.beginPath();

     ctx.arc(x, y, radius + design.width / 2, 0, Math.PI * 2);

     ctx.stroke();

     break;

 

   case 'dashed':

     ctx.strokeStyle = design.color;

     ctx.lineWidth = design.width;

     ctx.setLineDash([10, 5]);

     ctx.beginPath();

     ctx.arc(x, y, radius, 0, Math.PI * 2);

     ctx.stroke();

     ctx.setLineDash([]);

     break;

 

   case 'gradient':

     const gradient = ctx.createRadialGradient(x, y, radius - design.width, x, y, radius + design.width);

     gradient.addColorStop(0, design.color);

     gradient.addColorStop(0.5, '#FFD700');

     gradient.addColorStop(1, design.color);

     ctx.strokeStyle = gradient;

     ctx.lineWidth = design.width;

     ctx.beginPath();

     ctx.arc(x, y, radius, 0, Math.PI * 2);

     ctx.stroke();

     break;

 

   case 'rainbow':

     const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];

     for (let i = 0; i < colors.length; i++) {

       ctx.strokeStyle = colors[i];

       ctx.lineWidth = design.width / colors.length;

       ctx.beginPath();

       ctx.arc(x, y, radius + (i * design.width / colors.length), 0, Math.PI * 2);

       ctx.stroke();

     }

     break;

 

   case 'glow':

     ctx.shadowColor = design.color;

     ctx.shadowBlur = design.width * 2;

     ctx.strokeStyle = design.color;

     ctx.lineWidth = design.width;

     ctx.beginPath();

     ctx.arc(x, y, radius, 0, Math.PI * 2);

     ctx.stroke();

     ctx.shadowBlur = 0;

     break;

 

   case 'hearts':

     ctx.font = `${design.width * 3}px Arial`;

     ctx.fillStyle = design.color;

     for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 6) {

       const heartX = x + Math.cos(angle) * (radius + design.width);

       const heartY = y + Math.sin(angle) * (radius + design.width);

       ctx.fillText('💖', heartX - design.width, heartY + design.width / 2);

     }

     break;

 

   case 'stars':

     ctx.font = `${design.width * 2}px Arial`;

     ctx.fillStyle = design.color;

     for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 8) {

       const starX = x + Math.cos(angle) * (radius + design.width);

       const starY = y + Math.sin(angle) * (radius + design.width);

       ctx.fillText('⭐', starX - design.width / 2, starY + design.width / 4);

     }

     break;

 

   case 'neon':

     // Neon effect with multiple glows

     ctx.shadowColor = design.color;

     ctx.shadowBlur = design.width * 3;

     ctx.strokeStyle = design.color;

     ctx.lineWidth = design.width;

     ctx.beginPath();

     ctx.arc(x, y, radius, 0, Math.PI * 2);

     ctx.stroke();

     

     // Add inner neon glow

     ctx.shadowBlur = design.width;

     ctx.strokeStyle = '#FFFFFF';

     ctx.lineWidth = design.width / 2;

     ctx.beginPath();

     ctx.arc(x, y, radius - design.width / 2, 0, Math.PI * 2);

     ctx.stroke();

     ctx.shadowBlur = 0;

     break;

 

   case 'sparkle':

     // Main border

     ctx.strokeStyle = design.color;

     ctx.lineWidth = design.width;

     ctx.beginPath();

     ctx.arc(x, y, radius, 0, Math.PI * 2);

     ctx.stroke();

     

     // Add sparkle effects

     ctx.font = `${design.width * 2}px Arial`;

     ctx.fillStyle = '#FFD700';

     for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {

       const sparkleX = x + Math.cos(angle) * (radius + design.width * 2);

       const sparkleY = y + Math.sin(angle) * (radius + design.width * 2);

       ctx.fillText('✨', sparkleX - design.width, sparkleY + design.width / 2);

     }

     break;

 

   default:

     // Default solid border

     ctx.strokeStyle = design.color;

     ctx.lineWidth = design.width;

     ctx.beginPath();

     ctx.arc(x, y, radius, 0, Math.PI * 2);

     ctx.stroke();

 }

}

 

// Helper function to clean up temp files

function cleanupFiles(files) {

 setTimeout(() => {

   files.forEach(file => {

     if (fs.existsSync(file)) {

       fs.unlinkSync(file);

     }

   });

 }, 5000); // Clean up after 5 seconds

}

 

 

Add Comment

Please, Sign In to add comment

create new paste  /  syntax languages  /  archive  /  faq  /  tools  /  night mode  /  api  /  scraping api  /  news  /  pro
privacy statement  /  cookies policy  /  terms of service /  security disclosure  /  dmca  /  report abuse  /  contact
