//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1OMGt3cXEyYTU4dVNiYmJ0eGU4YVVNWXRFbkRUL3piRllpN3lFdStuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGNkVk9wNFlMVzFJcjFVOTlra0Z3NUpGTUs3dzVZUlBCN2xzMytUYzhYZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSkRRZFB2MS9OS3dOdGppNUU3YUxaVDFMMk5uMnBsTEZnWTRTMUlPcWtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQUcxamh0N3hIMUNrWjB6N2U3U29oWXVVSXROYlFWZmRCRmxEb3QxaGhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitING14QTZLbmhZRlVFeStFUFIxcGtSYnhEYlJsaHVwNUJMcHNxd0dCRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh5TEhkYitHZEhGWFJqZjFUVG9TRU9yRDd3TU9kUWl3VTRhMTVtV0xPV3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RxdnJLYWJMcWkrOVlnOHRvVC9INXo3OGg0SjZPbC91VEZ3RE1EUkZsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWNmVmR1SVFWZXRUUXowejNTSkowTFFNbkx0cEJld09uWnJCcnlNaHFsOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imw0S0dOSFRweENyU01GbldMb0FhM0NsMWIyYk1wNzBvWDRPOHFCc0trU3E0Si9wZGRYZGNheG5HdFhtME10VWtDdzB2UnFrcU9MdDBGeTNPeS9HSmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJDeU9KOE1tV1NhRXhSeWVLdkZLNm82OUtuQ0tFVmxSKzZ5SWNoTDFjN3h3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU5MDk2NDE2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI4NTI5RTNGM0YwQ0IzNzYxQUQxQTI2ODM5NEExNEM2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTg2NTYzOTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU5MDk2NDE2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM3NjMxOUVCM0MyREZFQjZGRDlFMDgyQzhCQUQ0MEU2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTg2NTYzOTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlBUDhPbmZZUW9HamVLQ2dGd19qRXciLCJwaG9uZUlkIjoiYTNmZGZkODYtZTkyZC00MWVkLWI5ZmEtOTBhMzNkYTAyNGMxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt2cWsxNjRQNXJMV09zNGVveVlwZEVGd3Y5Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmdVdIczl5Vk9zR1NZVG1RNm1lQjA0MUMyY2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM05WQ1pDNTQiLCJtZSI6eyJpZCI6Ijk0NzU5MDk2NDE2OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRM2fRc2fWM2fVM2fRc2fUs2fIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNN3ptcThFRVB5NndyTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJER2h5UFIxSXlQUnl3TWlJNXlPaVUwenFUbm9HTkFRKzFhMVZiYTlsazBvPSIsImFjY291bnRTaWduYXR1cmUiOiJvcW9zb0xtVVl5Uktud04zY2RsN0ZDVWQyQUE0UStyS3paNjRLSUo0Q2djQ2FjdXVFR2lJQzJXQ2FwVjRkempER1pnNlh3UUdhaDFwRWFNUHVaL0RCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN0Nid21sTWJoT2xCblMwbFY2MUd1c1BlMlp6SUltVlhTRkQraTNlQUZKU0UzYW94M3VnS0FjSEZkS01mWGd0eXVWaHVhL3RYUXVTanBXSHEyOXpJalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1OTA5NjQxNjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlF4b2NqMGRTTWowY3NESWlPY2pvbE5NNms1NkJqUUVQdFd0VlcydlpaTksifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg2NTYzOTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQzhEIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
