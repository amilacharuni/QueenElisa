const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==QS5VlNXpldulVcmhUe1RleaJjaCh3bfVmbadTbM1WWalGZ5MXeNdXchljTjolcMhWezp1Zpwd=28178886749',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://i.ibb.co/GPj867b/c85635e385ff88456ba8f2dbdfef956f.jpg',
  MONGODB_URL: '', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: '𝘽𝙇𝘼𝘾𝙆 𝙕𝙀𝙀',
  OWNER_NAME: '𝙈𝙍 𝘼𝙈𝙄𝙇𝘼 𝙋𝘼𝙏𝙃𝙐𝙈',
  OWNER_NUMBER: '94753797821',
  SUDO: '94753797821',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© 𝘽𝙇𝘼𝘾𝙆 𝙕𝙀𝙀 𝙈𝘿',
  STICKER_AUTHOR: '𝘽𝙇𝘼𝘾𝙆 𝙕𝙀𝙀',
  STICKER_PACK: '𝘽𝙇𝘼𝘾𝙆 𝙕𝙀𝙀',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 90,
  OWNER_R_EMOJI: '👽',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: true,
  ANTI_BAD_WORD: true,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
