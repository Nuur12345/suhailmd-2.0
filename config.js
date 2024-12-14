Inconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_31_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxLFxuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM4LFxuICAgICAgICA4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjEwLFxuICAgICAgICA2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NixcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDI4LFxuICAgICAgICA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInozZUpwZ2N3UHVrdmV0Z3EvZXYrblpyWjZkVjB0ZzNPTmgwRGhlREkzNEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNsVkFadEZJUVR1WHJYbW5hTlBQYUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjBjZDJjMzctNDY3MC00NzZiLWFjNzUtNTFjNzBhNjEyMTU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMTQzLFxuICAgICAgMTgyLFxuICAgICAgODksXG4gICAgICA0MSxcbiAgICAgIDc1LFxuICAgICAgMTc1LFxuICAgICAgMTk4LFxuICAgICAgMTUsXG4gICAgICAzMCxcbiAgICAgIDExLFxuICAgICAgMTkxLFxuICAgICAgMjMyLFxuICAgICAgMTM3LFxuICAgICAgMjUsXG4gICAgICA5MixcbiAgICAgIDIwMixcbiAgICAgIDE3MSxcbiAgICAgIDQsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgNCxcbiAgICAgIDE4MixcbiAgICAgIDIyNCxcbiAgICAgIDExNyxcbiAgICAgIDI1NSxcbiAgICAgIDEwNCxcbiAgICAgIDEyOCxcbiAgICAgIDQwLFxuICAgICAgNzAsXG4gICAgICAxNTAsXG4gICAgICA0NCxcbiAgICAgIDI4LFxuICAgICAgNzYsXG4gICAgICAyMTUsXG4gICAgICAyMDYsXG4gICAgICAxNDYsXG4gICAgICAyMjksXG4gICAgICA3MSxcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFA0WjVSN1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5MjY5NzkzMDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY4MDQ0OTc0MzQyMTU2OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0thTWxyWUhFTm1kOTdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNVR1RUNQbWxDSUczcTlSSk1vWkhZRFQ3bGk4QW43YTRRZG02c3pPR1FuVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrTUNLajNtbEovMjlXb1RiQWhNalZKYW9ZNithQ3RScDZYbjUrRXRTUHlrZkNBQkhxZEVEWkZ6UUpneUpFRmcvaUVYN01HL0RmTVpqMVR6QkQ3VnZBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPK2c4dmlZSitBcGdYWWcxQnBRM0JEbExBc3dSeHZJMWdjN0Qwek1XR1dwRjJGeC8zanBTc0ZoZGJpN3ErNnRBaHVFeTNnT2J1ajJidXJFakdLTEFEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTI2OTc5MzA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDIwMTA1NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
