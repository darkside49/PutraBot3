var {
 WAConnection,
  MessageType,
   Presence,
    MessageOptions,
     Mimetype,
      WALocationMessage,
       WA_MESSAGE_STUB_TYPES,
        WA_DEFAULT_EPHEMERAL,
         ReconnectMode,
          ProxyAgent,
           GroupSettingChange,
            waChatKey,
             mentionedJid,
              processTime,
        } = 
        require('@adiwajshing/baileys')
var hx = require('hxz-api')
var moment = require('moment-timezone')
var speed = require('performance-now')
var { spawn, exec, execSync } = require('child_process')
var axios = require('axios')
var ffmpeg = require('fluent-ffmpeg')
var fs = require('fs-extra')
var imgbb = require('imgbb-uploader')
var yts = require( 'yt-search')
var os = require('os')
var fromBuffer = require('file-type')
var FormData = require('form-data')
var util = require('util')
var got = require('got')
var twitterGetUrl = require('twitter-url-direct')
var googleImage = require('g-i-s')
var brainly = require('brainly-scraper')
var fetch = require('node-fetch')
var ggs = require('google-it')
var request = require('request')
var crypto = require('crypto')
var chalk = require('chalk')
var fromBuffer = require('file-type')
var ms = require('parse-ms')
var toMs = require('ms')
var { error } = require('qrcode-terminal')
var { color, bgcolor } = require('../V2/color')
var { wait, forks, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, spinner, globalSpinner, banner, start, info, success, close } = require('../V2/functions')
var { yta, ytv, upload, formatDate } = require('../V2/ytdl')
var { y2mateA, y2mateV } = require('../V2/y2mate')
var { webp2gifFile, igDownloader } = require('../V2/gif.js')
var { mediafireDl } = require('../V2/mediafire.js')
var { jadibot, stopjadibot } = require('../V2/jadibot.js')
var { lirikLagu } = require('../V2/lirik.js')
var afk = require('../V2/afk')
var { pinterest } = require('../V2/pinterest')
//////////////////////////\\\\\//\\\/\\/\//\/\\/\\\\/\\/\\/\\/\\/\\/\//\///\//\//\/\\/
var { jadivirtex1 } = require('../V5/jadivirtex1')
/////////////////////////////////////////////////////////\\///////////////////////////////
var _scommand = JSON.parse(fs.readFileSync('./V3/scommand.json'))
var welkom = JSON.parse(fs.readFileSync('./V3/welcome.json'))
var antilink = JSON.parse(fs.readFileSync('./V3/antilink.json'))
var antilinkyt = JSON.parse(fs.readFileSync('./V3/antilinkyt.json'))
var antilinkwame = JSON.parse(fs.readFileSync('./V3/antilinkwame.json'))
var antivirtex = JSON.parse(fs.readFileSync('./V3/antivirtex.json'))
var _registered = JSON.parse(fs.readFileSync('./V3/reg/registered.json'))
var register = JSON.parse(fs.readFileSync('./V3/reg/registered.json'))
////////////////////////////////////////////////////////////////////////////////////////
var setting = JSON.parse(fs.readFileSync('./V1/session/setting.json'))
//////////////////////////////////////////////////////////////////////////////////////////
var _afk = JSON.parse(fs.readFileSync('./V3/afk.json'))
var susunkata = JSON.parse(fs.readFileSync('./V3/susunkata.json'))
//////////////////////////////////////////////////////////////////////////////////////////
ownerName = setting.namaOwnr
ownerNumber = setting.nomorOwnr
owner = setting.Ownr
botName = setting.nmaBot
numberBot = setting.nmorBot
fake = setting.fke
gopay = setting.noGopay
lolkey = setting.LolKeyy
harga1bulan = 'HARGA : 1 BULAN 15K'
harga2bulan = 'HARGA : 2 BULAN 20K'
harga6bulan = 'HARGA : 6 BULAN 30K'
hargaperpanjang = 'PERPANJANG 15K / 1 BULAN'
logonyatod = fs.readFileSync('./V4/kirtod.jpeg')
nilogorules = fs.readFileSync('./V4/rules.jpg')
nilogoowner = fs.readFileSync('./V4/owner.jpg')
nilogomenu = fs.readFileSync('./V4/fakeakira.jpeg')
qrall = fs.readFileSync('./V4/qrallpayment.jpg')
qrgopay = fs.readFileSync('./V4/qrgopay.jpg')
/////////////////////////////////////////////
banChats = true
/////////////////////////////////////////////////////////////////////////////////////////
var getCmd = (id) => {
var position = null;
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return _scommand[position].chats;
}
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
var addCmd = (id, command) => {
var obj = { id: id, chats: command }
_scommand.push(obj)
fs.writeFileSync('./V3/scommand.json', JSON.stringify(_scommand))
}
//////////////////////////////////////////////////////////////////////////////////////////
          var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'Selamat Malam'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'Selamat Petang'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'Selamat Sore'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'Selamat Siang'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'Selamat Pagi'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'Selamat Pagi'
}
////////////////////////////////////////////////////////////////////////////////////////
module.exports = KirBotz = async (KirBotz, akira) => {
	   try {
       if (!akira.hasNewMessage) return
       akira = akira.messages.all()[0]
	   if (!akira.message) return
	   if (akira.key && akira.key.remoteJid == 'status@broadcast') return
	   global.blocked
	   akira.message = (Object.keys(akira.message)[0] === 'ephemeralMessage') ? akira.message.ephemeralMessage.message : akira.message
       var content = JSON.stringify(akira.message)
	   var from = akira.key.remoteJid
	   var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
	   var tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
	   var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
       var type = Object.keys(akira.message)[0]
       var cmd = (type === 'conversation' && akira.message.conversation) ? akira.message.conversation : (type == 'imageMessage') && akira.message.imageMessage.caption ? akira.message.imageMessage.caption : (type == 'videoMessage') && akira.message.videoMessage.caption ? akira.message.videoMessage.caption : (type == 'extendedTextMessage') && akira.message.extendedTextMessage.text ? akira.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
       var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
       body = (type === 'conversation' && akira.message.conversation.startsWith(prefix)) ? akira.message.conversation : (type == 'imageMessage') && akira.message[type].caption.startsWith(prefix) ? akira.message[type].caption : (type == 'videoMessage') && akira.message[type].caption.startsWith(prefix) ? akira.message[type].caption : (type == 'extendedTextMessage') && akira.message[type].text.startsWith(prefix) ? akira.message[type].text : (type == 'listResponseMessage') && akira.message[type].singleSelectReply.selectedRowId ? akira.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && akira.message[type].selectedButtonId ? akira.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(akira.message[type].fileSha256.toString('base64')) !== null && getCmd(akira.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(akira.message[type].fileSha256.toString('base64')) : ""
       budy = (type === 'conversation') ? akira.message.conversation : (type === 'extendedTextMessage') ? akira.message.extendedTextMessage.text : ''
       var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()       
       var args = body.trim().split(/ +/).slice(1)
       var arg = body.substring(body.indexOf(' ') + 1)
       var ar = args.map((v) => v.toLowerCase())
       var argz = body.trim().split(/ +/).slice(1)
       var isCmd = body.startsWith(prefix) 
       var q = args.join(' ')
       var Verived = "0@s.whatsapp.net"
       var is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
       var txt = akira.message.conversation
       var botNumber = KirBotz.user.jid
       var isGroup = from.endsWith('@g.us')
       var sender = isGroup ? akira.participant : akira.key.remoteJid
       var senderr = akira.key.fromMe ? KirBotz.user.jid : akira.key.remoteJid.endsWith('@g.us') ? akira.participant : akira.key.remoteJid
       var totalchat = await KirBotz.chats.all()
       var groupMetadata = isGroup ? await KirBotz.groupMetadata(from) : ''
       var groupName = isGroup ? groupMetadata.subject : ''
       var groupId = isGroup ? groupMetadata.jid : ''
       var groupMembers = isGroup ? groupMetadata.participants : ''
       var groupDesc = isGroup ? groupMetadata.desc : ''
       var groupOwner = isGroup ? groupMetadata.owner : ''
       var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
       var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
       var isGroupAdmins = groupAdmins.includes(sender) || false
       var isWelkom = isGroup ? welkom.includes(from) : false
       var isAntiLink = isGroup ? antilink.includes(from) : false
       var isAntiLinkyt = isGroup ? antilinkyt.includes(from) : false
       var isAntiLinkwame = isGroup ? antilinkwame.includes(from) : false
       var isAntiVirtex = isGroup ? antivirtex.includes(from) : false
       var isAfkOn = afk.checkAfkUser(sender, _afk)
       var conts = akira.key.fromMe ? KirBotz.user.jid : KirBotz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
       var pushname = akira.key.fromMe ? KirBotz.user.name : conts.notify || conts.vname || conts.name || '-'
       var mentionByTag = type == "extendedTextMessage" && akira.message.extendedTextMessage.contextInfo != null ? akira.message.extendedTextMessage.contextInfo.mentionedJid : []
       var mentionByreply = type == "extendedTextMessage" && akira.message.extendedTextMessage.contextInfo != null ? akira.message.extendedTextMessage.contextInfo.participant || "" : ""
       var mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
       mention != undefined ? mention.push(mentionByreply) : []
       var mentionUser = mention != undefined ? mention.filter(n => n) : []
       var isOwner = ownerNumber.includes(sender)
       var isRegister = register.includes(sender)
//////////////////////////////////////////////////////////////////////////////////////////
selectedButton = (type == 'buttonsResponseMessage') ? akira.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? akira.message.listResponseMessage.title : ''
//////////////////////////////////////////////////////////////////////////////////////////
var sendButton = async (from, context, fortext, but, fgi) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(from, buttonMessages, MessageType.buttonsMessage, {
quoted: fgi
})
}
var sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
var kma = gam1
var mhan = await KirBotz.prepareMessage(from, kma, image)
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await KirBotz.prepareMessage(from, kma, video)
var buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButloc = (from, title, text, desc, button, sen, men, file) => {
return KirBotz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: akira, contextInfo: {"mentionedJid": men ? men : []}})
}
///////////////////////////////////////////////
var getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
var addRegisteredUser = (userid, sender, age, time, serials) => {
            var obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./V3/reg/registered.json', JSON.stringify(_registered))
        }
        
var checkRegisteredUser = (sender) => {
            var status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
var isRegistered = checkRegisteredUser(sender)
var daftar1 = `Hai Kak  ${pushname}\nJangan Lupa Daftar Dulu Yah, agar bisa menggunakan fitur bot ini:).`
var daftar2 = '```Click Verify Di Bawah```\n```Jika Button Tidak Kelihatan Silahkan Ketik .verify```\n*「 PutraBot 」*'
var daftar3 = [
          {
            buttonId: `!verify`,
            buttonText: {
              displayText: `VERIFY`,
            },
            type: 1,
          },]
///////////////////////////////////////////
kirr = {
		  wait: '*Wait...*',
		  success: '*Nih Kak*',
		  error: {
		  stick: '*Gagal Convert Gambar To Sticker...Coba Lagi !*',
		  Iv: '*Linknya Error Kak !*'
		  },
		  only: {
		  admin: '*Fitur ini khusus Admin kak !*',
		  group: '*Fitur ini khusus Group kak !*'
		  }
		  }
//////////////////////////////////////////////////////////////////////////////////////////
var jam = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         
var hour_now = moment().format('HH:mm:ss')
//////////////////////////////////////////////////////////////////////////////////////////
var sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var hideTag = async function(from, text){
var anu = await KirBotz.groupMetadata(from)
var members = anu.participants
var ane = []
for (var i of members){
ane.push(i.jid)
}
KirBotz.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./V4/fakeakira.jpeg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
var listmsg = (from, title, desc, list) => { 
var po = KirBotz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©KirBotz*_","listType": "SINGLE_SELECT","sections": list}}, {})
return KirBotz.relayWAMessage(po, {waitForAck: true})
}
var fakeyt = (teks) => {
KirBotz.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hai Kak ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://k.top4top.io/p_2229i8t100.jpg",
"mediaUrl": "https://youtu.be/z-NuxWkYtlI",
"thumbnail": fs.readFileSync('./V4/fakeakira.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgi})
};
var reply = (teks) => {
KirBotz.sendMessage(from, teks, text, {quoted:fgi, thumbnail: qrall})
}
var katalog = (teks) => {
res = KirBotz.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999999999, "message": teks, "footerText": "©KirBotz", "jpegThumbnail": fs.readFileSync('./V4/fakeakira.jpeg'), "surface": 'CATALOG' }}, {quoted:fgi})
KirBotz.relayWAMessage(res)
}
var sendMess = (hehe, teks) => {
KirBotz.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? KirBotz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : KirBotz.sendMessage(from, teks.trim(), extendedText, { quoted: akira, contextInfo: { "mentionedJid": memberr } })
}            
var getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
var costum = (pesan, tipe, target, target2) => {
KirBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
KirBotz.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
KirBotz.sendMessage(from, hasil, type, options).catch(e => {
KirBotz.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}
var runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
function monospace(string) {
return '```' + string + '```'
}   
var fgi = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {})
},
message: { 
"videoMessage": { 
"title": `${ucapanWaktu}\n${tanggal}\n${runtime(process.uptime())}`,
"h": `${ucapanWaktu}\n${tanggal}\n${runtime(process.uptime())}`,
'duration': '99999', 
'gifPlayback': 'true', 
'caption': `${ucapanWaktu}\n${tanggal}\n${runtime(process.uptime())}`,
'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')
}
}
} 
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
var mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
var media = fs.readFileSync(filename)
var type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
KirBotz.sendMessage(to, media, type, { quoted: fgi, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
/////////\\//\\/\\//\//\\/\\//\//\//\\/\\//\\\\/\\//\/\\/\//\//\/\
///////////////\\//\//\//\\//\//\\/\\/\\//\/\\/\//\\/\//\//\\/\\//\//\/
var sticOwner = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/owner.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/notadmin.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticAdmin = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/admin.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticWait = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/wait.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticOk = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/ok.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticToxic = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/toxic.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticLrngn = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/larangan.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
//////////////////////////////////////////////////////////////////////////////////////////
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (isCmd && isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
//////////////////////////////////////////////////
var sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('../V2/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./WM/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					KirBotz.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
////////////////////////////////////////
if (isGroup) {
		if (!akira.key.fromMe && banChats === true) return
		for (var x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			var getId = afk.getAfkId(x, _afk)
			var getReason = afk.getAfkReason(getId, _afk)
			var getTime = afk.getAfkTime(getId, _afk)
			var cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    var getTime = afk.getAfkTime(sender, _afk)
		    var getReason = afk.getAfkReason(sender, _afk)
		    var ittung = ms(await Date.now() - getTime)
		    var pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./V3/afk.json', JSON.stringify(_afk))
		}
	    }
//////////////////////////////////////////////
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./V3/susunkata.json", JSON.stringify(susunkata))
                }
            }
////////////////////////////////////////////
var mengt =`${runtime(process.uptime())}\n${totalchat.length} Chat`  
var jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
var fakeTroli = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {orderMessage: {itemCount: 9999, status: 200, surface: 200, message: mengt, orderTitle: mengt, thumbnail: fs.readFileSync('./V4/qrgopay.jpg'), sellerJid: '0@s.whatsapp.net'}}}   
if (!akira.key.fromMe && banChats === true) return
var createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
if (isGroup && !akira.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'yellow'))
fakeyt(`「 *LINK TERDETEKSI* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}
if (isGroup && !akira.key.fromMe && isAntiLinkyt) {
if (budy.includes("://youtu.be/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'yellow'))
fakeyt(`「 *LINK TERDETEKSI* 」\n\n_Link terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}
if (isGroup && !akira.key.fromMe && isAntiLinkwame) {
if (budy.includes("wa.me/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'yellow'))
fakeyt(`「 *LINK TERDETEKSI* 」\n\n_Link terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
fakeyt(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
KirBotz.groupRemove(from, [sender])
}
//━━━━━━━━━━━━━━━[ NO PREFIX ]━━━━━━━━━━━━━━━\\
switch(is) {

case 'listtts':
fakeyt(` ${prefix}tts kodebahasa teks
Kode Bahasa | Negara
  af             Afrikaans
  sq             Albanian
  ar             Arabic
  hy             Armenian
  ca             Catalan
  zh             Chinese
  zh-cn         Chinese (Mandarin/China)
  zh-tw         Chinese (Mandarin/Taiwan)
  zh-yue        Chinese (Cantonese)
  hr             Croatian
  cs             Czech
  da             Danish
  nl              Dutch
  en             English
  en-au         English (Australia)
  en-uk         English (United Kingdom)
  en-us         English (United States)
  eo             Esperanto
  fi              Finnish
  fr              French
  de            German
  el             Greek
  ht             Haitian Creole
  hi             Hindi
  hu            Hungarian
  is             Icelandic
  id             Indonesian
  it             Italian
  ja            Japanese
  ko            Korean
  la             Latin
  lv             Latvian
  mk            Macedonian
  no             Norwegian
  pl              Polish
  pt             Portuguese
  pt-br          Portuguese (Brazil)
  ro             Romanian
  ru             Russian
  sr             Serbian
  sk             Slovak
  es             Spanish
  es-es         Spanish (Spain)
  es-us         Spanish (United States)
  sw             Swahili
  sv             Swedish
  ta             Tamil
  th             Thai
  tr              Turkish
  vi              Vietnamese
  cy             Welsh
  `)
break
case 'jadibot':
    if (!akira.key.fromMe && !isOwner) return reply(`Silahkan Chat Owner Kalau Mau Jadi Bot`) 
    jadibot(fakeyt,KirBotz,from)
    break
case 'listbot':
    var tekss = '「 *LIST JADIBOT* 」\n'
    for(var i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    fakeyt(tekss)
    break
case '9999':
if (isRegistered) return fakeyt('Akun Kamu Sudah Terverfikasi')
var serialUser = createSerial(18)
	         try {
								ppimg = await KirBotz.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./V3/reg/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         var anuu = `「 *PENDAFTARAN USER* 」
*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot WhatsApp*

*🌹 Nama :* ${pushname}
*🌹 API :* +${sender.split('@')[0]}
*🌹 Serial:* ${serialUser}
*🌹 Total:* ${_registered.length} Pengguna

*「 PutraBot 」*`
         kirgans = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `!menu`,buttonText:{displayText: `🏷️MENU`},type:1}]
              imageMsg = (await KirBotz.prepareMessageMedia(kirgans, "imageMessage", { thumbnail: kirgans, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await KirBotz.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgi})
              KirBotz.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
            setTimeout( () => {
			KirBotz.updatePresence(from, Presence.composing)
			fakeyt(`*Terimakasih Telah Terdaftar Di PutraBot*`)
		}, 2000)
        break
case 'setfotomenu':
	        if ((isMedia && !akira.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
			delb = await KirBotz.downloadMediaMessage(boij)
			fs.writeFileSync(`./V4/fakeakira.jpeg`, delb)
			fakeyt('Sukses')
        	} else {
            fakeyt(`Reply Gambar Dengan Caption ${prefix}setfotomenu`)
          	}
			break	
case 'join':
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(kirr.Iv)
            hen = args[0]
            if (!q) return fakeyt('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply ('pastikan link sudah benar!')
            var response = await KirBotz.acceptInvite(codeInvite)
            fakeyt('SUKSES')
            } catch {
            fakeyt('LINK ERROR!')
            }
            break
case 'tes':
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*Bot Dah On Kak Silahkan Pencet Menu Di Bawah*
*Gunakan Bot Sebaik Mungkin Yah*
`
, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'mode':
if (!akira.key.fromMe) return;
sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}self`,
buttonText: {
displayText: `⬡ SELF `,
},
type: 1,
},
{
buttonId: `${prefix}public`,
buttonText: {
displayText: `⬡ PUBLIC`,
},
type: 1,
},
]);
break;
case 'leave':{
          if (!akira.key.fromMe && !isOwner) return reply(`kata kasar 1`)
          KirBotz.groupLeave(from)
}
          break
case 'd':
case 'del':
case 'delete': 
               try {
               if (akira.message.extendedTextMessage === undefined || akira.message.extendedTextMessage === null) return reply('Reply chat bot')
               KirBotz.deleteMessage(from, {id: akira.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break

}
//━━━━━━━━━━━━━━━[ YANG PREFIX ]━━━━━━━━━━━━━━━\\
switch (command) {

case 'verify':
fakeyt('Bot Telah Mengirimkan Kode Verifikasi Lewat Pribadi Silahkan Di Cek dan Verify!!!')
KirBotz.sendMessage(sender, "Kode Verify : 9999 \nAnda Juga Dapat Mengetuk Tautan Ini Untuk Verifikasi: https://wa.me/18188600080?text=9999 \nKode Ini Bersifat Sementara Dan Bisa Jadi Sama Dengan Orang Lain.\nAnda bisa membalas pesan 9999 ke nomor ini untuk verify.", text, {quoted: fakeTroli})
break
case 'setcmd':
              if (!akira.key.fromMe && !isOwner) return reply(`kata kasar 2`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = akira.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply("Done!")
              } else {
              reply('tag stickenya')
}
              break
case 'delcmd':
              if (!akira.key.fromMe && !isOwner) return reply(`kata kasar 3`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = akira.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./V3/scommand.json', JSON.stringify(_scommand))
              reply("Done!")
              break
case 'listcmd':
              var teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              var cemde = [];
              for (var i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
case 'asupan':
case 'chika':
case 'delvira':
case 'ayu':
case 'bunga':
case 'aura':
case 'nisa':
case 'ziva':
case 'yana':
case 'viona':
case 'syania':
case 'riri':
case 'syifa':
case 'mama_gina':
case 'alcakenya':
case 'mangayutri':
case 'rikagusriani':
case 'bocil':
case 'geayubi':
case 'santuy':
case 'ukhty':
                    get_result = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/${command}?apikey=Alphabot`)
                    pll = `𝗔𝘀𝘂𝗽𝗮𝗻𝗻𝘆𝗮 𝗞𝗮𝗸 シ︎`
   sendButVideo(from, pll, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next シ︎`,
            },
            type: 1,
          },
        ]);                 
                    break
case 'menu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
janganti = '18188600080'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 INFO USER 」*
*│ Nama :* ${pushname}
*│ Nomor :* wa.me/${sender.split('@')[0]}
*│ Bio :* ${thu.status}
*╰──────────────*

*╭──「 INFO BOTZ 」*
*│Nama Owner :* ${ownerName}
*│Nomor Owner :* wa.me/${janganti}
*│Nama Bot :* ${botName}
*│Nomor Bot :* wa.me/${numberBot}
*│Mode :* ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}
*│Group Chat :* ${groups.length}
*│Private Chat :* ${privat.length}
*│Total Chat :* ${totalChat.length}
*╰──────────────*

*╭──「 PERATURAN 」*
*│ Runtime :* ${runtime(process.uptime())}
*│ Tanggal :* ${tanggal}
*│ Wib :* ${wib}
*│ Wita :* ${wita}
*│ Wit :* ${wit}
*╰──────────────*
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
 「 *PutraBot* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: '←𝐎𝐖𝐍𝐄𝐑→' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'list':
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
listMsg = {
buttonText: '𝐋𝐈𝐒𝐓 𝐁𝐎𝐓',
footerText: `シ︎ 𝐆𝐫𝐨𝐮𝐩 𝐂𝐡𝐚𝐭𝐬 : ${groups.length} 
シ︎ 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}
シ︎ 𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
シ︎ 𝐒𝐩𝐞𝐞𝐝 : ${latensie.toFixed(4)} _Second_
シ︎ 𝐀𝐜𝐭𝐢𝐯𝐞 : ${runtime(process.uptime())}`,
description: `${ucapanWaktu} Kak @${sender.split('@')[0]}
Silahkan Pilih Di Bawah`,
sections: [
{
"title": `~𝕋𝕆ℙ 𝕌ℙ 𝔾𝔸𝕄𝔼~`,
 rows: [
{
"title": "~㋛︎ 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄~",
"rowId": `${prefix}~dmff~`
}
,
{
"title": "~㋛︎ 𝐌𝐎𝐁𝐈𝐋𝐄 𝐋𝐄𝐆𝐄𝐍𝐃~",
"rowId": `${prefix}~dmml~`
}
,
{
"title": "~㋛︎ 𝐃𝐎𝐌𝐈𝐍𝐎~",
"rowId": `${prefix}~chip~`
}
,
{
"title": "~㋛︎ 𝐇𝐀𝐆𝐎~",
"rowId": `${prefix}~dmhago~`
}
,
{
"title": "~㋛︎ 𝐆𝐀𝐑𝐄𝐍𝐀~",
"rowId": `${prefix}~garenashell~`
}
,
{
"title": "~㋛︎ 𝐏𝐎𝐈𝐍𝐓 𝐁𝐋𝐀𝐍𝐊~",
"rowId": `${prefix}~pointblank~`
}
,
{
"title": "~㋛︎ 𝐂𝐀𝐋𝐋 𝐎𝐅 𝐃𝐔𝐓𝐘~",
"rowId": `${prefix}~cod~`
}
,
{
"title": "~㋛︎ 𝐏𝐔𝐁𝐆~",
"rowId": `${prefix}~pubg~`
}
]
}
,
{
"title": `𝕃𝕀𝕊𝕋 𝕄𝔼ℕ𝕌`,
 rows: [
{
"title": "㋛︎ 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔",
"rowId": `${prefix}allmenu`
}
,
{
"title": "㋛︎ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔",
"rowId": `${prefix}ownermenu`
}
,
{
"title": "㋛︎ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔",
"rowId": `${prefix}groupmenu`
}
,
{
"title": "㋛︎ 𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔",
"rowId": `${prefix}makermenu`
}
,
{
"title": "㋛︎ 𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔",
"rowId": `${prefix}othermenu`
}
,
{
"title": "㋛︎ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔",
"rowId": `${prefix}downloadmenu`
}
,
{
"title": "㋛︎ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔",
"rowId": `${prefix}stickermenu`
}
,
{
"title": "㋛︎ 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔",
"rowId": `${prefix}gamemenu`
}
,
{
"title": "㋛︎ 𝟏𝟖+ 𝐌𝐄𝐍𝐔",
"rowId": `${prefix}18+menu`
}
,
{
"title": "㋛︎ 𝐀𝐒𝐔𝐏𝐀𝐍 𝐌𝐄𝐍𝐔",
"rowId": `${prefix}asupanmenu`
}
,
{
"title": "㋛︎ 𝐇𝐄𝐖𝐀𝐍 𝐌𝐄𝐍𝐔",
"rowId": `${prefix}hewanmenu`
}
]
}
,
{
"title": `𝕊𝕆𝕊𝕀𝔸𝕃 𝕄𝔼𝔻𝕀𝔸`,
 rows: [
{
"title": "㋛︎ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐎𝐖𝐍𝐄𝐑",
"rowId": `${prefix}ytowner`
}
,
{
"title": "㋛︎ 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 𝐎𝐖𝐍𝐄𝐑",
"rowId": `${prefix}igowner`
}
,
{
"title": "㋛︎ 𝐓𝐈𝐊𝐓𝐎𝐊 𝐎𝐖𝐍𝐄𝐑",
"rowId": `${prefix}ttowner`
}
,
{
"title": "㋛︎ 𝐆𝐈𝐓𝐇𝐔𝐁 𝐎𝐖𝐍𝐄𝐑",
"rowId": `${prefix}gtowner`
}
,
{
"title": "㋛︎ 𝐆𝐑𝐎𝐔𝐏 𝐎𝐖𝐍𝐄𝐑",
"rowId": `${prefix}gckirbotz`
}
]
}
,
{
"title": `𝕀ℕ𝔽𝕆ℝ𝕄𝔸𝕊𝕀 𝔹𝕆𝕋`,
 rows: [
{
"title": "㋛︎ 𝐒𝐄𝐖𝐀𝐁𝐎𝐓",
"rowId": `${prefix}~sewabot~`
}
,
{
"title": "㋛︎ 𝐃𝐎𝐍𝐀𝐒𝐈",
"rowId": `${prefix}donasi`
}
,
{
"title": "㋛︎ 𝐑𝐔𝐋𝐄𝐒",
"rowId": `${prefix}rules`
}
]
}],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgi})
break
case 'hewanmenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 HEWAN MENU 」*
❏ ${prefix}fox
❏ ${prefix}dog
❏ ${prefix}cat
❏ ${prefix}panda
❏ ${prefix}panda1
❏ ${prefix}bird
❏ ${prefix}koala
*╰─────────────*
 「 *PutraBot* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'soundd':
         var sound1 = fs.readFileSync(`./SOUND/sound1.mp3`)
         KirBotz.sendMessage(from, sound1, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'groupmenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 GROUP MENU 」*
 ${prefix}add *6281234567890*
 ${prefix}kick *@tag*
 ${prefix}welcome *button*
 ${prefix}antilink *button*
 ${prefix}antilinkwame *button*
 ${prefix}antilinkyt *button*
 ${prefix}group *button*
 ${prefix}opengc
 ${prefix}closegc
 ${prefix}linkgc
 ${prefix}tagall *teks*
 ${prefix}hidetag *teks*
*╰─────────────*
 「 *PutraBot* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'soundd':
         var sound1 = fs.readFileSync(`./SOUND/sound1.mp3`)
         KirBotz.sendMessage(from, sound1, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'makermenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 MAKER MENU 」*
 ${prefix}coolgravity 
 ${prefix}pornhub 
 ${prefix}glitch 
 ${prefix}avenger 
 ${prefix}space 
 ${prefix}ninjalogo 
 ${prefix}marvelstudio 
 ${prefix}lionlogo 
 ${prefix}wolflogo 
 ${prefix}steel3d 
 ${prefix}wallgravity 
 ${prefix}tiktok 
 ${prefix}arcade8bit 
 ${prefix}battlefield4 
 ${prefix}pubg 
 ${prefix}blackpink 
 ${prefix}neon 
 ${prefix}greenneon 
 ${prefix}advanceglow 
 ${prefix}futureneon 
 ${prefix}sandwriting 
 ${prefix}sandsummer 
 ${prefix}sandengraved 
 ${prefix}metaldark 
 ${prefix}neonlight 
 ${prefix}holographic 
 ${prefix}text1917 
 ${prefix}minion 
 ${prefix}deluxesilver 
 ${prefix}newyearcard 
 ${prefix}bloodfrosted 
 ${prefix}halloween 
 ${prefix}jokerlogo 
 ${prefix}fireworksparkle 
 ${prefix}natureleaves 
 ${prefix}bokeh 
 ${prefix}toxic 
 ${prefix}strawberry 
 ${prefix}box3d 
 ${prefix}roadwarning 
 ${prefix}breakwall 
 ${prefix}icecold 
 ${prefix}luxury 
 ${prefix}cloud 
 ${prefix}summersand 
 ${prefix}horrorblood 
 ${prefix}thunder 
 ${prefix}shadow
 ${prefix}cup
 ${prefix}cup1
 ${prefix}romance
 ${prefix}smoke
 ${prefix}burnpaper
 ${prefix}lovemessage
 ${prefix}undergrass
 ${prefix}love
 ${prefix}coffe
 ${prefix}woodheart
 ${prefix}woodenboard
 ${prefix}summer3d
 ${prefix}wolfmetal
 ${prefix}nature3d
 ${prefix}underwater
 ${prefix}golderrose
 ${prefix}summernature
 ${prefix}letterleaves
 ${prefix}glowingneon
 ${prefix}fallleaves
 ${prefix}flamming
 ${prefix}harrypotter
 ${prefix}carvedwood
 ${prefix}wetglass
 ${prefix}multicolor3d
 ${prefix}watercolor
 ${prefix}luxurygold
 ${prefix}galaxywallpaper
 ${prefix}lighttext
 ${prefix}beautifulflower
 ${prefix}puppycute
 ${prefix}royaltext
 ${prefix}heartshaped
 ${prefix}birthdaycake
 ${prefix}galaxystyle
 ${prefix}hologram3d
 ${prefix}glossychrome
 ${prefix}greenbush
 ${prefix}metallogo
 ${prefix}noeltext
 ${prefix}glittergold
 ${prefix}textcake
 ${prefix}starsnight
 ${prefix}wooden3d
 ${prefix}textbyname
 ${prefix}writegalacy
 ${prefix}galaxybat
 ${prefix}snow3d
 ${prefix}birthdayday
 ${prefix}goldplaybutton
 ${prefix}silverplaybutton
 ${prefix}freefire
 ${prefix}serti1
 ${prefix}serti2
 ${prefix}serti3
*╰─────────────*
 「 *PutraBot* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'soundd':
         var sound1 = fs.readFileSync(`./SOUND/sound1.mp3`)
         KirBotz.sendMessage(from, sound1, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'stickermenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 STICKER MENU 」*
 ${prefix}tourl
 ${prefix}sticker 
 ${prefix}take
 ${prefix}toimg
 ${prefix}tomp4
 ${prefix}tomp3 
 ${prefix}attp
 ${prefix}ttp 
 ${prefix}smeme
 ${prefix}ssweb
 ${prefix}nulis 
 ${prefix}emoji
 ${prefix}faktaunik
 ${prefix}katabijak
 ${prefix}pantun
 ${prefix}bucin
 ${prefix}quotes
 ${prefix}quotesanime
 ${prefix}quotesdilan
 ${prefix}cerpen
 ${prefix}ppcp
 ${prefix}darkjokes
 ${prefix}lovelive
 ${prefix}sao
 ${prefix}hsdxd
 ${prefix}meme
 ${prefix}meme
 ${prefix}art
 ${prefix}bts
 ${prefix}exo
 ${prefix}elf
 ${prefix}neko
 ${prefix}waifu
 ${prefix}shota
 ${prefix}husbu
 ${prefix}sagiri
 ${prefix}shinobu
 ${prefix}megumin
 ${prefix}wallnime
*╰─────────────*
 「 *PutraBot* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'soundd':
         var sound1 = fs.readFileSync(`./SOUND/sound1.mp3`)
         KirBotz.sendMessage(from, sound1, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'ownermenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 OWNER MENU 」*
 ${prefix}bc *teks*
 ${prefix}public
 ${prefix}self
 ${prefix}mode
 ${prefix}setcmd *reply sticker*
 ${prefix}delcmd *reply sticker
 ${prefix}listcmd
 tes
 jadibot
 listbot
 join *linkgc*
*╰─────────────*
 「 *PutraBot* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'soundd':
         var sound1 = fs.readFileSync(`./SOUND/sound1.mp3`)
         KirBotz.sendMessage(from, sound1, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case '18+menu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 18+ MENU 」*
 ${prefix}waifu
 ${prefix}loli
 ${prefix}husbu
 ${prefix}milf
 ${prefix}cosplay
 ${prefix}wallml
 ${prefix}hentai
 ${prefix}chiisaihentai
 ${prefix}trap
 ${prefix}blowjob
 ${prefix}yaoi
 ${prefix}ecchi
 ${prefix}ahegao
 ${prefix}hololewd
 ${prefix}sideoppai
 ${prefix}animefeets
 ${prefix}animebooty
 ${prefix}animethighss
 ${prefix}hentaiparadise
 ${prefix}animearmpits
 ${prefix}hentaifemdom
 ${prefix}lewdanimegirls
 ${prefix}biganimetiddies
 ${prefix}animebellybutton
 ${prefix}hentai4everyone
 ${prefix}bj
 ${prefix}ero
 ${prefix}cum
 ${prefix}feet
 ${prefix}yuri
 ${prefix}trap
 ${prefix}lewd
 ${prefix}feed
 ${prefix}eron
 ${prefix}solo
 ${prefix}gasm
 ${prefix}poke
 ${prefix}anal
 ${prefix}holo
 ${prefix}tits
 ${prefix}kuni
 ${prefix}kiss
 ${prefix}erok
 ${prefix}smug
 ${prefix}baka
 ${prefix}solog
 ${prefix}feetg
 ${prefix}lewdk
 ${prefix}waifu
 ${prefix}pussy
 ${prefix}femdom
 ${prefix}cuddle
 ${prefix}hentai
 ${prefix}eroyuri
 ${prefix}cum_jpg
 ${prefix}erofeet
 ${prefix}holoero
 ${prefix}classic
 ${prefix}erokemo
 ${prefix}fox_girl
 ${prefix}futanari
 ${prefix}lewdkemo
 ${prefix}wallpaper
 ${prefix}pussy_jpg
 ${prefix}kemonomimi
 ${prefix}nsfw_avatar
*╰─────────────*
 「 *PutraBot* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'soundd':
         var sound1 = fs.readFileSync(`./SOUND/sound1.mp3`)
         KirBotz.sendMessage(from, sound1, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'downloadmenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 DOWNLOAD MENU 」*
 ${prefix}play *query*
 ${prefix}ytmp4 *linkYT*
 ${prefix}ytmp3 *linkYT*
 ${prefix}tiktokdl *linkTT*
 ${prefix}tiktokmp4 *linkTT*
 ${prefix}tiktokmp3 *linkTT*
 ${prefix}igdl *linkIG*
 ${prefix}mediafire *link*
*╰─────────────*
 「 *PutraBot* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'soundd':
         var sound1 = fs.readFileSync(`./SOUND/sound1.mp3`)
         KirBotz.sendMessage(from, sound1, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'othermenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 OTHER MENU 」*
 ${prefix}owner
 ${prefix}runtime
 ${prefix}speed
 ${prefix}rules
 ${prefix}bugreport *keluhan bot*
 ${prefix}lolkey *apikey*
 ${prefix}asmaulhusna
 ${prefix}kisahnabi *adam*
 ${prefix}jadwalsholat *Bojonegoro*
 ${prefix}lirik *Judul Lagu*
 ${prefix}~afk~ ~*Alasan*~
*╰─────────────*
 「 *PutraBot* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'soundd':
         var sound1 = fs.readFileSync(`./SOUND/sound1.mp3`)
         KirBotz.sendMessage(from, sound1, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'gamemenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 GAME MENU 」*
 ${prefix}suit
 ${prefix}bisakah
 ${prefix}kapankah
 ${prefix}rate
 ${prefix}apakah
 ${prefix}gantengcek
 ${prefix}cantikcek
 ${prefix}cekme
 ${prefix}jadian
 ${prefix}truth
 ${prefix}dare
 ${prefix}susunkata
*╰─────────────*
 「 *PutraBot* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'soundd':
         var sound1 = fs.readFileSync(`./SOUND/sound1.mp3`)
         KirBotz.sendMessage(from, sound1, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'asupanmenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 ASUPAN MENU 」*
 ${prefix}asupan
 ${prefix}chika
 ${prefix}delvira
 ${prefix}ayu
 ${prefix}bunga
 ${prefix}aura
 ${prefix}nisa
 ${prefix}ziva
 ${prefix}yana
 ${prefix}viona
 ${prefix}syania
 ${prefix}riri
 ${prefix}syifa
 ${prefix}mama_gina
 ${prefix}alcakenya
 ${prefix}mangayutri
 ${prefix}rikagusriani
 ${prefix}geayubi
 ${prefix}ukhty
 ${prefix}cogan
 ${prefix}cecan
 ${prefix}santuy
 ${prefix}santuy2
 ${prefix}ukhti
 ${prefix}bocil
 ${prefix}bocil2
 ${prefix}ghea
 ${prefix}rika
 ${prefix}cecanmalaysia
 ${prefix}cecankorea
 ${prefix}cecanjapan
 ${prefix}cecanindonesia
 ${prefix}cecanthailand
 ${prefix}cecanvietnam
 ${prefix}cecanrandom
*╰─────────────*
 「 *PutraBot* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 'soundd':
         var sound1 = fs.readFileSync(`./SOUND/sound1.mp3`)
         KirBotz.sendMessage(from, sound1, MessageType.audio, {quoted: fgi, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'allmenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
janganti = '6287705048235'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
	menunyangen = `
*🌹ℍ𝔼𝕃𝕃𝕆𝕎𝕆ℝ𝕃𝔻🌹*

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
*Nama Owner :* ${ownerName}
*Nomor Owner :* wa.me/${janganti}
*Nama Bot :* ${botName}
*Nomor Bot :* wa.me/${numberBot}
*Mode :* ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}
*Group Chat :* ${groups.length}
*Private Chat :* ${privat.length}
*Total Chat :* ${totalChat.length}

*──────" 𝖀𝖘𝖊𝖗 𝕴𝖓𝖋𝖔 "──────*
*Nama :* ${pushname}
*Nomor :* wa.me/${sender.split('@')[0]}
*Bio :* ${thu.status}

*╭──「 OWNER MENU 」*
 ${prefix}bc *teks*
 ${prefix}public
 ${prefix}self
 ${prefix}mode
 ${prefix}setcmd *reply sticker*
 ${prefix}delcmd *reply sticker
 ${prefix}listcmd
 tes
 jadibot
 listbot
 join *linkgc*
*╰─────────────*
*╭──「 OTHER MENU 」*
 ${prefix}owner
 ${prefix}runtime
 ${prefix}speed
 ${prefix}rules
 ${prefix}bugreport *keluhan bot*
 ${prefix}lolkey *apikey*
 ${prefix}asmaulhusna
 ${prefix}kisahnabi *adam*
 ${prefix}jadwalsholat *Bojonegoro*
 ${prefix}lirik *Judul Lagu*
 ${prefix}afk *Alasan*
*╰─────────────*
*╭──「 GROUP MENU 」*
 ${prefix}add *6281234567890*
 ${prefix}kick *@tag*
 ${prefix}welcome *button*
 ${prefix}antilink *button*
 ${prefix}antilinkwame *button*
 ${prefix}antilinkyt *button*
 ${prefix}antivirtex *button*
 ${prefix}group *button*
 ${prefix}opengc
 ${prefix}closegc
 ${prefix}linkgc
 ${prefix}tagall *teks*
 ${prefix}hidetag *teks*
*╰─────────────*
*╭──「 MAKER MENU 」*
 ${prefix}coolgravity 
 ${prefix}pornhub 
 ${prefix}glitch 
 ${prefix}avenger 
 ${prefix}space 
 ${prefix}ninjalogo 
 ${prefix}marvelstudio 
 ${prefix}lionlogo 
 ${prefix}wolflogo 
 ${prefix}steel3d 
 ${prefix}wallgravity 
 ${prefix}tiktok 
 ${prefix}arcade8bit 
 ${prefix}battlefield4 
 ${prefix}pubg 
 ${prefix}blackpink 
 ${prefix}neon 
 ${prefix}greenneon 
 ${prefix}advanceglow 
 ${prefix}futureneon 
 ${prefix}sandwriting 
 ${prefix}sandsummer 
 ${prefix}sandengraved 
 ${prefix}metaldark 
 ${prefix}neonlight 
 ${prefix}holographic 
 ${prefix}text1917 
 ${prefix}minion 
 ${prefix}deluxesilver 
 ${prefix}newyearcard 
 ${prefix}bloodfrosted 
 ${prefix}halloween 
 ${prefix}jokerlogo 
 ${prefix}fireworksparkle 
 ${prefix}natureleaves 
 ${prefix}bokeh 
 ${prefix}toxic 
 ${prefix}strawberry 
 ${prefix}box3d 
 ${prefix}roadwarning 
 ${prefix}breakwall 
 ${prefix}icecold 
 ${prefix}luxury 
 ${prefix}cloud 
 ${prefix}summersand 
 ${prefix}horrorblood 
 ${prefix}thunder 
 ${prefix}shadow
 ${prefix}cup
 ${prefix}cup1
 ${prefix}romance
 ${prefix}smoke
 ${prefix}burnpaper
 ${prefix}lovemessage
 ${prefix}undergrass
 ${prefix}love
 ${prefix}coffe
 ${prefix}woodheart
 ${prefix}woodenboard
 ${prefix}summer3d
 ${prefix}wolfmetal
 ${prefix}nature3d
 ${prefix}underwater
 ${prefix}golderrose
 ${prefix}summernature
 ${prefix}letterleaves
 ${prefix}glowingneon
 ${prefix}fallleaves
 ${prefix}flamming
 ${prefix}harrypotter
 ${prefix}carvedwood
 ${prefix}wetglass
 ${prefix}multicolor3d
 ${prefix}watercolor
 ${prefix}luxurygold
 ${prefix}galaxywallpaper
 ${prefix}lighttext
 ${prefix}beautifulflower
 ${prefix}puppycute
 ${prefix}royaltext
 ${prefix}heartshaped
 ${prefix}birthdaycake
 ${prefix}galaxystyle
 ${prefix}hologram3d
 ${prefix}glossychrome
 ${prefix}greenbush
 ${prefix}metallogo
 ${prefix}noeltext
 ${prefix}glittergold
 ${prefix}textcake
 ${prefix}starsnight
 ${prefix}wooden3d
 ${prefix}textbyname
 ${prefix}writegalacy
 ${prefix}galaxybat
 ${prefix}snow3d
 ${prefix}birthdayday
 ${prefix}goldplaybutton
 ${prefix}silverplaybutton
 ${prefix}freefire
*╰─────────────*
*╭──「 STICKER MENU 」*
 ${prefix}tourl 
 ${prefix}sticker
 ${prefix}take 
 ${prefix}toimg 
 ${prefix}tomp4 
 ${prefix}tomp3 
 ${prefix}attp 
 ${prefix}ttp 
 ${prefix}smeme
 ${prefix}ssweb 
 ${prefix}nulis 
 ${prefix}emoji
 ${prefix}faktaunik
 ${prefix}katabijak
 ${prefix}pantun
 ${prefix}bucin
 ${prefix}quotes
 ${prefix}quotesanime
 ${prefix}quotesdilan
 ${prefix}cerpen
 ${prefix}ppcp
 ${prefix}darkjokes
 ${prefix}lovelive
 ${prefix}sao
 ${prefix}hsdxd
 ${prefix}meme
 ${prefix}art
 ${prefix}bts
 ${prefix}exo
 ${prefix}elf
 ${prefix}neko
 ${prefix}shota
 ${prefix}sagiri
 ${prefix}shinobu
 ${prefix}megumin
 ${prefix}wallnime
*╰─────────────*
*╭──「 18+ MENU 」*
 ${prefix}waifu
 ${prefix}loli
 ${prefix}husbu
 ${prefix}milf
 ${prefix}cosplay
 ${prefix}wallml
 ${prefix}hentai
 ${prefix}chiisaihentai
 ${prefix}trap
 ${prefix}blowjob
 ${prefix}yaoi
 ${prefix}ecchi
 ${prefix}ahegao
 ${prefix}hololewd
 ${prefix}sideoppai
 ${prefix}animefeets
 ${prefix}animebooty
 ${prefix}animethighss
 ${prefix}hentaiparadise
 ${prefix}animearmpits
 ${prefix}hentaifemdom
 ${prefix}lewdanimegirls
 ${prefix}biganimetiddies
 ${prefix}animebellybutton
 ${prefix}hentai4everyone
 ${prefix}bj
 ${prefix}ero
 ${prefix}cum
 ${prefix}feet
 ${prefix}yuri
 ${prefix}trap
 ${prefix}lewd
 ${prefix}feed
 ${prefix}eron
 ${prefix}solo
 ${prefix}gasm
 ${prefix}poke
 ${prefix}anal
 ${prefix}holo
 ${prefix}tits
 ${prefix}kuni
 ${prefix}kiss
 ${prefix}erok
 ${prefix}smug
 ${prefix}baka
 ${prefix}solog
 ${prefix}feetg
 ${prefix}lewdk
 ${prefix}waifu
 ${prefix}pussy
 ${prefix}femdom
 ${prefix}cuddle
 ${prefix}hentai
 ${prefix}eroyuri
 ${prefix}cum_jpg
 ${prefix}erofeet
 ${prefix}holoero
 ${prefix}classic
 ${prefix}erokemo
 ${prefix}fox_girl
 ${prefix}futanari
 ${prefix}lewdkemo
 ${prefix}wallpaper
 ${prefix}pussy_jpg
 ${prefix}kemonomimi
 ${prefix}nsfw_avatar
*╰─────────────*
*╭──「 DOWNLOAD MENU 」*
 ${prefix}play *query*
 ${prefix}ytmp4 *linkYT*
 ${prefix}ytmp3 *linkYT*
 ${prefix}tiktokdl *linkTT*
 ${prefix}tiktokmp4 *linkTT*
 ${prefix}tiktokmp3 *linkTT*
 ${prefix}igdl *linkIG*
 ${prefix}mediafire *link*
*╰─────────────*
*╭──「 GAME MENU 」*
 ${prefix}suit
 ${prefix}bisakah
 ${prefix}kapankah
 ${prefix}rate
 ${prefix}apakah
 ${prefix}gantengcek
 ${prefix}cantikcek
 ${prefix}cekme
 ${prefix}jadian
 ${prefix}truth
 ${prefix}dare
*╰─────────────*
*╭──「 ASUPAN MENU 」*
 ${prefix}asupan
 ${prefix}chika
 ${prefix}delvira
 ${prefix}ayu
 ${prefix}bunga
 ${prefix}aura
 ${prefix}nisa
 ${prefix}ziva
 ${prefix}yana
 ${prefix}viona
 ${prefix}syania
 ${prefix}riri
 ${prefix}syifa
 ${prefix}mama_gina
 ${prefix}alcakenya
 ${prefix}mangayutri
 ${prefix}rikagusriani
 ${prefix}geayubi
 ${prefix}ukhty
 ${prefix}cogan
 ${prefix}cecan
 ${prefix}santuy
 ${prefix}santuy2
 ${prefix}ukhti
 ${prefix}bocil
 ${prefix}bocil2
 ${prefix}ghea
 ${prefix}rika
 ${prefix}cecanmalaysia
 ${prefix}cecankorea
 ${prefix}cecanjapan
 ${prefix}cecanindonesia
 ${prefix}cecanthailand
 ${prefix}cecanvietnam
 ${prefix}cecanrandom
*╰─────────────*
*╭──「 HEWAN MENU 」*
 ${prefix}fox
 ${prefix}dog
 ${prefix}cat
 ${prefix}panda
 ${prefix}panda1
 ${prefix}bird
 ${prefix}koala
*╰─────────────*

*──────" 𝕰𝖓𝖉𝖎𝖓𝖌 𝕺𝖋 𝕸𝖊𝖓𝖚 "──────*`
var imgs = await KirBotz.prepareMessage('0@c.us', fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), image, { thumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`) })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await KirBotz.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `All Menu`,
                        "description": menunyangen,
                        "footerText": `©PutraBot`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "9999999999",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "999999999",
                        "retailerId": `Let's grow together with me`,
                        "url": "https://wa.me/18188600080"
                    },
                    "businessOwnerJid": "18188600080@s.whatsapp.net",
                }
            }, { quoted: fgi, mimetype: 'image/jpeg' })
            KirBotz.relayWAMessage(ctlg)
            break
///////NULIS//////
case 'nulis':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if(!q) return fakeyt('Teks Yang Mau Di Tulis??')
listMsg = {
buttonText: '𝗟𝗜𝗦𝗧',
footerText: `${ucapanWaktu} Kak @${sender.split('@')[0]}
Silahkan Pilih Di Bawah`,
description: `LIST NULIS`,
sections: [
{
"title": `${ucapanWaktu} - ${tanggal}`,
 rows: [
{
"title": `BUKU KANAN`,
"rowId": `${prefix}nuliskanan ${q}`
}
,
{
"title": `BUKU KIRI`,
"rowId": `${prefix}nuliskiri ${q}`
}
,
{
"title": `FOLIO KANAN`,
"rowId": `${prefix}foliokanan ${q}`
}
,
{
"title": `FOLIO KIRI`,
"rowId": `${prefix}foliokiri ${q}`
}
]
}],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgi})
break
case 'nuliskiri':{
                if (args.length < 1) return fakeyt(`Kirim perintah *${prefix}nuliskiri* teks`)
                fakeyt(kirr.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./V4/NULIS/FOTO/BUKU/sebelumkiri.jpg','-font','./V4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./V4/NULIS/FOTO/BUKU/setelahkiri.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                KirBotz.sendMessage(from, fs.readFileSync('./V4/NULIS/FOTO/BUKU/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas lo kak...`})
                })
            }
                break
case 'nuliskanan':{
                if (args.length < 1) return fakeyt(`Kirim perintah *${prefix}nuliskanan* teks`)
                fakeyt(kirr.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./V4/NULIS/FOTO/BUKU/sebelumkanan.jpg','-font','./V4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./V4/NULIS/FOTO/BUKU/setelahkanan.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                KirBotz.sendMessage(from, fs.readFileSync('./V4/NULIS/FOTO/BUKU/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas lo kak...`})
                })
            }
                break
case 'foliokiri':{
                if (args.length < 1) return fakeyt(`Kirim perintah *${prefix}foliokiri* teks`)
                fakeyt(kirr.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./V4/NULIS/FOTO/FOLIO/sebelumkiri.jpg','-font','./V4/NULIS/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./V4/NULIS/FOTO/FOLIO/setelahkiri.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                KirBotz.sendMessage(from, fs.readFileSync('./V4/NULIS/FOTO/FOLIO/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas lo kak...`})
                })
            }
                break
case 'foliokanan':{
                if (args.length < 1) return fakeyt(`Kirim perintah *${prefix}foliokanan* teks`)
                fakeyt(kirr.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./V4/NULIS/FOTO/FOLIO/sebelumkanan.jpg','-font','./V4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./V4/NULIS/FOTO/FOLIO/setelahkanan.jpg'])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                KirBotz.sendMessage(from, fs.readFileSync('./V4/NULIS/FOTO/FOLIO/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas lo kak...`})
                })
            }
                break
case 'pinterest':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
var amsulah = data.result
var pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${q}`)
})
break
/////////////////GAME
case 'truth':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              var trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              var ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              KirBotz.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: fgi })
              break
case 'dare':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              var dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              var der = dare[Math.floor(Math.random() * dare.length)]
              buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
              prep = await KirBotz.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgi})
              KirBotz.relayWAMessage(prep)
              break		
case 'jadian':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
case 'cekme':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    fakeyt("Loading. . .")
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
					var hoby = ['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Iyaa cakep kek mimin','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget kek mimin😍','❌','✔️']
					var wetak= ['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					try {
					profil = await KirBotz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `*≡════《 Cek Sifat @${bet.split('@')[0]} 》════≡*

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%

*≡═════《 CEKSIFATME 》═════≡*`
					buff = await getBuffer(profil)
					KirBotz.sendMessage(from, buff, image, {quoted: fgi, caption: profile, contextInfo: { mentionedJid: [bet]}})
					break
case 'bisakah':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return fakeyt(`Contoh : ${prefix}bisakah aku terbang`)
naon = ["Iya","Tidak","Mungkin"]
random = naon[Math.floor(Math.random() * (naon.length))]
tt = `Jawaban : ${random}`
fakeyt(tt)
break
case 'kapankah':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return fakeyt(`Contoh : ${prefix}kapankah aku menikah`)
no = `${Math.floor(Math.random() * 100)}`
naon = ["Jam lagi","Hari lagi","Minggu lagi","Bulan lagi","Tahun lagi"]
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Jawaban : ${no} ${random}`
fakeyt(kapan)
break      	   
case 'rate':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return fakeyt(`Contoh : ${prefix}rate aku ganteng`)
random = `${Math.floor(Math.random() * 100)}`
rating = `Persentase : ${random}%`
fakeyt(rating)
break
case 'apakah':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return fakeyt(`Contoh : ${prefix}apakah aku jelek`)
naon = ["Iya","Tidak","Mungkin"]
random = naon[Math.floor(Math.random() * (naon.length))]
tz = `Jawaban = ${random}`
fakeyt(tz)
break
case 'gantengcek':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
  if (args.length < 1) return fakeyt(`Contoh : ${prefix}gantengcek Mimin`) 
  random = `${Math.floor(Math.random() * 100)}`
  cek = `Persentase : ${random}%`
  KirBotz.sendMessage(from, cek, text, {quoted: fgi})
break
case 'cantikcek':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
  if (args.length < 1) return fakeyt(`Contoh : ${prefix}cantikcek Jeje`)
  random = `${Math.floor(Math.random() * 100)}`
  can = q
  cek = `Persentase : ${random}%`
  KirBotz.sendMessage(from, cek, text, {quoted: fgi})
break
case 'susunkata':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return fakeyt("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              KirBotz.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: fgi}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./V3/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              fakeyt("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./V3/susunkata.json", JSON.stringify(susunkata))
}
              break
case 'suit': 
		     if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
		     if (!isGroup) return fakeyt('Khusus Group')
		     but = [
         { buttonId: `${prefix}suitnya batu`, buttonText: { displayText: 'BATU✊' }, type: 1 },
         { buttonId: `${prefix}suitnya gunting`, buttonText: { displayText: 'GUNTING✌️' }, type: 1 },
         { buttonId: `${prefix}suitnya kertas`, buttonText: { displayText: 'KERTAS✋' }, type: 1 }
         ]
         sendButton(from, `Silahkan Pilih Kak ${pushname}`, fake, but)
         break
case 'suitnya':
					if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
					if (!isGroup) return fakeyt('Khusus Group')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nBot *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nBot *Batu*\nKamu Kalah 😆",
					    "Kamu *Gunting*\nBot *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  fakeyt(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nBot *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nBot *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nBot *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						fakeyt(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nBot *Gunting*\nKamu Menang 😔",
					    "Kamu *Batu*\nBot *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nBot *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  fakeyt(batu)
					} else {
					  fakeyt('Pilih Gunting/Batu/Kertas')
					}
           break
///////
case 'bugreport':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              if (args.length < 1) return fakeyt(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              fakeyt('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              KirBotz.sendMessage('6287705048235@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
case 'ssweb':
case 'ss':
                if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                if (args.length < 1) return fakeyt('Urlnya mana kak')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					KirBotz.sendMessage(from, buff, image, {quoted: fgi, caption : teks})
					break
case 'serti1':
case 'serti2':
case 'serti3':
if (args.length ==0) return fakeyt('Text Nya Mana kak?')
txtt = args.join (" ")
fakeyt(`Wet wet...`)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
KirBotz.sendMessage(from, buff, image, { quoted: fgi, caption: 'Nih kak Hasil nya' })
break
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':
          if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
          var wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          var wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  var bb = await KirBotz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
            var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]
            var ButtonssMessages = {
            contentText: `*PutraBot*`,
            buttons: buttonnsss,
            footerText: `Klik Next Untuk Melanjutkan`,
            headerType: 4,
            imageMessage: bb.message.imageMessage
            }
            await KirBotz.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : fgi})
            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'art':
case 'bts':
case 'exo':
case 'elf':
case 'neko':
case 'shota':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
                if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                but = [
                { buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT☕' }, type: 1 }
                       ]
                sendButImage(from, `RANDOM`, `PutraBot`, hasil, but)
                    break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
                if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
                but = [
                { buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT☕' }, type: 1 }
                       ]
                sendButImage(from, `RANDOM`, `PutraBot`, hasil, but)
                    break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'hentai':
case 'eroyuri':
case 'cum_jpg':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
                if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
                but = [
                { buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT☕' }, type: 1 }
                       ]
                sendButImage(from, `RANDOM`, `PutraBot`, hasil, but)
                    break
case 'wasted':
		    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !akira.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
			owgi = await KirBotz.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=KirBotzzz01&img=${data.display_url}`)
			KirBotz.sendMessage(from, buff, image, {quoted: akira, caption: kirr.success})
		    } else {
			fakeyt(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
		    }
		    break
case 'cogan':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
fakeyt(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=${lolkey}`)
wmn = `🐧PutraBot`
trans = `PutraBot`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '🔖 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecan':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
fakeyt(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`)
wmn = `🐧PutraBot`
trans = `PutraBot`
but = [
          { buttonId: `${prefix}cecan`, buttonText: { displayText: '🔖 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecanvietnam':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'PutraBot'})
break
case 'cecanrandom':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, image, {quoted: fgi, caption: ''})
break
case 'hijaber':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'santuy2':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ukhti':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'bocil2':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ghea':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'rika':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanmalaysia':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecankorea':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanindonesia':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanjapan':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanthailand':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=ZeroYT7`)
fakeyt(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'sewabot':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
Yakin Nih Mau Sewa Bot ? 🤔 Boong Auto Banned >_<`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `
${wib} *𝑾𝒊𝒃*
${wita} *𝑾𝒊𝒕𝒂*
${wit} *𝑾𝒊𝒕*
Jam : *${time}*
Runtime : *${runtime(process.uptime())}*
PutraBot`, buttons: [{ buttonId: `${prefix}sewa1`, buttonText: { displayText: '🗿Ya' }, type: 1 },{ buttonId: `${prefix}gk`, buttonText: { displayText: '👀Tidak' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogomenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'sewa1':
 if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
 listMsg = {
 buttonText: 'LIST SEWA',
 footerText: 'PutraBot',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan Pilih List Sewabot`,
 sections: [
                     {
                      "title": `${ucapanWaktu} - ${tanggal}`,
 rows: [
                          {
                              "title": "1 BULAN",
                              "rowId": `${prefix}waktu 1bulan`
                           },
                           {
                              "title": "2 BULAN",
                              "rowId": `${prefix}waktu 2bulan`
                           },
                           {
                              "title": "6 BULAN",
                              "rowId": `${prefix}waktu 6bulan`
                           },
                           {
                              "title": "PERPANJANG",
                              "rowId": `${prefix}waktu panjang`
                           }
                        ]
                     }],
 listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgi})
break
case 'waktu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if((args[0]) == '1bulan'){
            saa =`${harga1bulan}`            
            var buttonpulsa = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saa}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonpulsa,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            } else
if ((args[0]) == '2bulan'){
            pay =`${harga2bulan}`            
            var buttongopay = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${pay}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttongopay,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            } else
if ((args[0]) == '6bulan'){
            voo =`${harga6bulan}`            
            var buttonovo = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            } else
if ((args[0]) == 'panjang'){
            voo =`${hargaperpanjang}`            
            var buttonovo = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            }
            break
case 'payment':
case 'donasi':
 if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
 listMsg = {
 buttonText: 'PAYMENT',
 footerText: 'PutraBot',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan Pilih List Payment`,
 sections: [
                     {
                      "title": `${ucapanWaktu} - ${time}`,
 rows: [
                          {
                              "title": "QR ALL PAYMENT",
                              "rowId": `${prefix}qrall`
                           },
                           {
                              "title": "QR GOPAY",
                              "rowId": `${prefix}qrgopay`
                           },
                           {
                              "title": "NOMOR GOPAY",
                              "rowId": `${prefix}via payment`
                           }
                        ]
                     }],
 listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:akira})
break
case 'qrall':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
jangannti = '18188600080'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Silahkan Scan Di Atas
Kalau Udah Kirim ScreenShot 
Bukti Transper Ke Owner
Chat wa.me/${jangannti}

*${tanggal}*
`, buttons: [{ buttonId: `${prefix}ok`, buttonText: { displayText: ' OK ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: qrall, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'qrgopay':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
jangannti = '18188600080'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Silahkan Scan Di Atas
Kalau Udah Kirim ScreenShot 
Bukti Transper Ke Owner
Chat wa.me/${jangannti}

*${tanggal}*
̵`, buttons: [{ buttonId: `${prefix}ok`, buttonText: { displayText: ' OK ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: qrgopay, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'via':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if ((args[0]) == 'payment'){
            voto =`*NOMOR :* ${gopay}`            
            var buttonovo = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voto}`,
			footerText: 'Jika Sudah Transfer Langsung Pencet Owner Di Bawah',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
                   
            }
            break
case 'dmml':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 MOBILE LEGEND 」*
• VIA ID & SERVER
• LEGAL 100%
• PROSES 1-5 MENIT

☂ *86 💎 Rp 20.000*
☂ *172 💎 Rp 39.500*
☂ *257 💎 Rp 58.000*
☂ *344 💎 Rp 78.000*
☂ *429 💎 Rp 97.500*
☂ *514 💎 Rp 116.000*
☂ *600 💎 Rp 135.400*
☂ *706 💎 Rp 156.614*
☂ *878 💎 Rp 194.282*
☂ *963 💎 Rp 213.897*
☂ *1412 💎 Rp 310.756*
☂ *2195 💎 Rp 455.170*
☂ *3688 💎 Rp 760.000*
☂ *4394 💎 Rp 890.982*
☂ *5532 💎 Rp 1.145.000*
☂ *9288 💎 Rp 1.901.000*

*Starlight Membership Bonus 12 💎 Rp 97.000*
*Twilight Pass [PROMO ]  Rp 97.000*
*Starlight Membership  Rp 127.000*
*Twilight  Rp 127.000*
*Starlight Membership Plus [PROMO ] Rp 200.000*
*Mobile Legend Member Plus Rp 285.000*
̵`, buttons: [{ buttonId: `${prefix}format`, buttonText: { displayText: 'メ FORMAT メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'dmff':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 FREE FIRE 」*
• VIA ID
• LEGAL 100%
• PROSES 1-7 MENIT

☂ *50 💎 Rp 7.789*
☂ *70 💎 Rp 10.000*
☂ *100 💎 Rp 15.500*
☂ *140 💎 Rp 19.500*
☂ *210 💎 Rp 28.522*
☂ *355 💎 Rp 46.500*
☂ *500 💎 Rp 66.500*
☂ *720 💎 Rp 92.740*
☂ *1000 💎 Rp 129.104*
☂ *1440 💎 Rp 183.200*
☂ *2000 💎 Rp 250.400*

*Member Mingguan Rp 28.800*
*Member Bulanan Rp 138.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
̵`, buttons: [{ buttonId: `${prefix}format`, buttonText: { displayText: 'メ FORMAT メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'chip':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 DOMINO 」*
• VIA ID + NICK
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *30M Koin Emas-D Rp 6.000*
☂ *60M Koin Emas-D Rp 12.000*
☂ *90M Koin Emas-D Rp 18.000*
☂ *100M Koin Emas-D Rp 19.500*
☂ *200M Koin Emas-D Rp 31.000*
☂ *400M Koin Emas-D Rp 62.000*
☂ *430M Koin Emas-D Rp 68.000*
☂ *500M Koin Emas-D Rp 81.500*
☂ *2B Koin Emas-D Rp 251.000*
☂ *4B Koin Emas-D Rp 502.000*
☂ *6B Koin Emas-D Rp 753.000*
☂ *8B Koin Emas-D Rp 1.004.000*
☂ *10B Koin Emas-D Rp 1.255.000*
☂ *12B Koin Emas-D Rp 1.506.000*
☂ *14B Koin Emas-D Rp 1.757.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
̵`, buttons: [{ buttonId: `${prefix}format`, buttonText: { displayText: 'メ FORMAT メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'dmhago':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 HAGO 」*
• VIA ID
• LEGAL 100%
• PROSES 1-3 MENIT

*6 💎 Rp 2.000*
*45 💎 Rp 15.000*
*90 💎 Rp 30.000*
*225 💎 Rp 74.000*
*375 💎 Rp 121.000*
*900 💎 Rp 291.000*
*1650 💎 Rp 531.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
̵`, buttons: [{ buttonId: `${prefix}format`, buttonText: { displayText: 'メ FORMAT メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'garenashell':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 GARENA 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *33 SHELL 💰 Rp 10.000*
☂ *66 SHELL 💰 Rp 20.000*
☂ *99 SHELL 💰 Rp 30.000*
☂ *165 SHELL 💰 Rp 50.000*
☂ *330 SHELL 💰 Rp 100.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
`, buttons: [{ buttonId: `${prefix}format`, buttonText: { displayText: 'メ FORMAT メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'pointblank':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 POINT BLANK 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *1200 PB CASH 💸 Rp 10.000*
☂ *2400 PB CASH 💸 Rp 20.000*
☂ *6000 PB CASH 💸 Rp 50.000*
☂ *12000 PB CASH 💸 Rp 95.000*
☂ *24000 PB CASH 💸 Rp 200.000*
☂ *36000 PB CASH 💸 Rp 280.000*
☂ *60000 PB CASH 💸 Rp 480.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
`, buttons: [{ buttonId: `${prefix}format`, buttonText: { displayText: 'メ FORMAT メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'cod':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 CALL OF DUTY 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *31 CP 💸 Rp 5.000*
☂ *62 CP 💸 Rp 10.000*
☂ *127 CP 💸 Rp 20.000*
☂ *317 CP 💸 Rp 50.000*
☂ *634 CP 💸 Rp 90.000*
☂ *1373 CP 💸 Rp 195.000*
☂ *1901 CP 💸 Rp 250.000*
☂ *3300 CP 💸 Rp 395.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
`, buttons: [{ buttonId: `${prefix}format`, buttonText: { displayText: 'メ FORMAT メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'pubg':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
var mena = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 PUBG 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *53 UC 💸 Rp 10.000*
☂ *105 UC 💸 Rp 22.000*
☂ *131 UC 💸 Rp 29.000*
☂ *263 UC 💸 Rp 48.500*
☂ *530 UC 💸 Rp 96.000*
☂ *825 UC 💸 Rp 143.000*
☂ *1100 UC 💸 Rp 187.000*
☂ *1925 UC 💸 Rp 319.430*
☂ *2200 UC 💸 Rp 372.680*
☂ *2463 UC 💸 Rp 422.230*
☂ *2730 UC 💸 Rp 456.180*
☂ *3025 UC 💸 Rp 502.205*
☂ *3300 UC 💸 Rp 552.205*
☂ *3563 UC 💸 Rp 602.680*
☂ *3830 UC 💸 Rp 632.180*
☂ *4125 UC 💸 Rp 687.180*
☂ *4400 UC 💸 Rp 732.180*
☂ *4663 UC 💸 Rp 776.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
`, buttons: [{ buttonId: `${prefix}format`, buttonText: { displayText: 'メ FORMAT メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./RANDOM/menu${menhe}.jpg`), contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'format':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*Sebelum lanjut, Mohon diisi dulu !!*

*𖣘 ɴᴀᴍᴀ :*
*𖣘 ɪᴅ :*
*𖣘 ɴᴏᴍɪɴᴀʟ :*
*𖣘 ʜᴀʀɢᴀ ᴅɪᴀᴍᴏɴᴅ :*
*Pastikan Format Benar !!*
*Jika Salah Isi Format Maka Diamond Gak Masuk*
*Kami tidak akan bertanggung jawab !!*
*Jika Sudah Selesai Isi Format Harap Kirim Ke Owner !!*
*Terima kasih*

${tanggal}
̵`, buttons: [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'メ PAYMENT メ' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ OWNER メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogomenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'script':
case 'sc':
fakeyt(`Ingin script botnya kak??
Chat wa ownerku https://wa.me/+18188600080
`)
break
case 'rules':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}
𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯
❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ*

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
_*https://wa.me/18188600080*_`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `
*Jika Sudah Paham Rules Nya Silahkan Pencet Di Bawah Jika Tidak Kelihatan Ketik .menu*
̵`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'メ Menu' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogorules, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'runtime':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
fakeyt(`Aktip Selama ${runtime(process.uptime())}\n\n${wib} *WIB*\n${wit} *WIT*\n${wita} *WITA*`)
break
case 'speed':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              timestampe = speed();
              latensie = speed() - timestampe
              fakeyt(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
case 'owner':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
members_ids = []
for (var mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN:${ownerName}\n` +
            `item1.TEL;waid=${owner}:${owner}\n` +
            `item1.X-ABLabel:👑 Creator\n` +
            `item2.EMAIL;type=INTERNET:han@putraweb.my.id\n` +
            `item2.X-ABLabel:📧 Email\n` +
            `item3.URL:https://wa.me/+18188600080/\n` +
            `item3.X-ABLabel:⚙️ Wa Owner\n` +
            `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:🌍 Region\n` +
            `item5.X-ABLabel:⚔️ PutraBot Developer\n` +
            'END:VCARD'.trim()
KirBotz.sendMessage(from, {displayName: `Creator PutraBot`, vcard: vcard2}, contact, 
{ quoted: akira, 
})
menuh = `Hai Kak @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Tuh Owner Ku Kak >_<
Jangan Macem² Yah Kak`,
buttons: [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OK SIAP' }, type: 1 }
         ], 
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogoowner, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'ytowner':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
fakeyt (`*Chat aja kak*\nhttps://wa.me/+18188600080`)
break
case 'igowner':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
fakeyt (`*Follow Kak*\nhttps://www.instagram.com/putraweb.my.id/`)
break
case 'ttowner':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
fakeyt (`*Gapunya kak*`)
break
case 'gtowner':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
fakeyt (`*Follow Kak*\nhttps://github.com/HanPutra/`)
break
case 'gckirbotz':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
fakeyt (`*Join Kak*\nhttps://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ`)
break
case 'bc':
             if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
             if (!akira.key.fromMe && !isOwner) return fakeyt(`kata kasar 4`)
             if (args.length < 1) return fakeyt('teks?')
             anu = await KirBotz.chats.all()
             if (isMedia && !akira.message.videoMessage || isQuotedImage) {
             var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
             bc = await KirBotz.downloadMediaMessage(encmedia)
             for (var _ of anu) {
             KirBotz.sendMessage(_.jid, bc, image, {quoted:fgi,caption: `「 PutraBot 」\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (var _ of anu) {
KirBotz.sendMessage(_.jid, 
	    {"contentText": `「 PutraBot 」\n\n${body.slice(4)}`,
	    "footerText": `*PutraBot || ${tanggal}*`,
	    "buttons": [
	    {"buttonId": `.menu`,
	    "buttonText": {"displayText": "MENU"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:fgi})
}
             fakeyt('Suksess broadcast')
}
             break
case 'lirik':
if (args.length < 1) return fakeyt('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
fakeyt(lirik)
})
break
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
case 'nickepep':
if (args.length ==0)return fakeyt('Id Nya Kak???')
yeye = args.join(" ")
anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${yeye}?apikey=KirBotzzz01`)
fakeyt(`*Nick FF Anda*\n${anu.result}`)
break
case 'quotes':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    fakeyt(`_${quotes}_\n\n*â€• ${author}*`)
                    break
case 'quotesanime':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    fakeyt(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
                    break
case 'quotesdilan':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
case 'cerpen':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    titid = ini_txt
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
case 'lolkey': 
case 'cekapikey':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              if (args.length < 1) return fakeyt(`Ketik ${prefix}lolkey [Apikeynya]`) 
              data = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${data.result.username}\n➸ Request= ${data.result.requests}\n➸ Today= ${data.result.today}\n➸ Akun Type= ${data.result.account_type}\n➸ Expired= ${data.result.expired}\n➸ API = https://api.lolhuman.xyz`
              KirBotz.sendMessage(from, teks, text, {quoted: akira})
              break
case 'coolgravity':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    if (args.length == 0) return fakeyt(`Example: ${prefix + command} Akira`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/coolgravity?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow : putraweb.my.id`, quoted : akira})
                    })
                    break
case 'smeme': 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
fakeyt('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !akira.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira 
owgi = await  KirBotz.downloadAndSaveMediaMessage(ger)
anu = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
fakeyt(`Gunakan foto/stiker!!!\nLalu Gunakan Reply Dengan Teks ${prefix}smeme Putra|Bot`)
}
break
case 'take':
case 'colong':
    		if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
    		if (!isQuotedSticker) return fakeyt('Stiker aja kak')
            encmedia = JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : ``
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('../V2/fetcher').createExif(satu, dua)
			require('../V2/fetcher').modStick(media, KirBotz, akira, from)
			break
case 'tourl':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
               if ((isMedia && !akira.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               sticWait(from)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
               owgi = await KirBotz.downloadMediaMessage(boij)
               res = await upload(owgi)
               fakeyt(res)
               } else {
               fakeyt('kirim/reply gambar/video')
}
               break
case 'igdl': 
case 'instagram':
case 'instagramdownload':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              if (!q) return fakeyt('Link Yang Mana?')
              if (!q.includes('instagram')) return reply(`error kak`)
              sticWait(from)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, akira) })
             .catch((err) => { reply(String(err)) })
              break
case 'mediafire':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              if (args.length < 1) return fakeyt('Link Nya Mana? ')
              if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(kirr.error.Iv)
              teks = args.join(' ')
              res = await mediafireDl(teks)
              result = `MediaFire Downloader
               
Nama : ${res[0].nama}
Ukuran : ${res[0].size}
Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
              fakeyt(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: fgi})
              break
case 'play':
             if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
             if (args.length < 1) return fakeyt(`Kirim perintah *${prefix}play query*`)
             sticWait(from)
             var yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             var { thumb, title, filesizeF, filesize } = res
             var capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}
•⚡ Link Video : ${yut.videos[0].url}`
             ya = await getBuffer(thumb)
             py =await KirBotz.prepareMessage(from, ya, image)
             sendButloc(from,monospace(capti),'',`Powered By *PutraBot*`,[{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}
],null,null,ya)
})
break
case 'ytmp3':
fakeyt(kirr.wait)
if (args.length ==0)return fakeyt('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp3?url=${ini_link}&apikey=apivinz`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
res = await getBuffer(get.url_audio)
KirBotz.sendMessage(from, res, audio, { quoted: fakeTroli })
break
case 'ytmp4':
fakeyt(kirr.wait)
if (args.length ==0)return fakeyt('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp4?url=${ini_link}&apikey=apivinz`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
res = await getBuffer(get.url_video)
KirBotz.sendMessage(from, res, video, { quoted: fakeTroli, caption: ini_txt })
break
case 'tiktokdl':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!q) return fakeyt('Linknya?')
if (!q.includes('tiktok')) return reply(`Link Error kak`)
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `Pencet Button Di Bawah
PutraBot`, buttons: [{ buttonId: `${prefix}tiktokmp4 ${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 },{ buttonId: `${prefix}tiktokmp3 ${q}`, buttonText: { displayText: 'AUDIO' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: logonyatod, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'tiktokmp4':
 		if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
 		if (!q) return fakeyt('Linknya?')
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(kirr.Iv)
 		sticWait(from)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		var { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `Make Doang Gak Follow🙄Gak Malu?\nFollow Nih https://www.instagram.com/putraweb.my.id×/`
		KirBotz.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:akira,caption:me})
		})
		})
     		break
case 'tiktokmp3':
             if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             sticWait(from)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
             KirBotz.sendMessage(from, get_audio, audio, { mimetype:'audio/mp4', ptt:true, quoted:akira,contextInfo: {forwardingScore: 508, isForwarded: true}})
             break
case 'slow':
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
            if (!isQuotedVideo) return reply('Reply videonya!')
            sticWait(from)
            encmedia = JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            KirBotz.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: fgi })
            fs.unlinkSync(ran)
            })
            break
case 'asmaulhusna':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    fakeyt(ini_txt)
                    break
case 'kisahnabi':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    if (args.length == 0) return fakeyt(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    fakeyt(ini_txt)
                    break
case 'jadwalsholat':	
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    if (args.length == 0) return fakeyt(`Example: ${prefix + command} Bojonegoro`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    fakeyt(ini_txt)
                    break
case 'semoji':
case 'emoji':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolkey}`)
              await KirBotz.sendMessage(from, ini_buffer, sticker, { quoted: akira })
              break
/////\\\\\
case 'ppcp':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
sticWait(from)
anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
cewe = await getBuffer(anu.result.female)
cowo = await getBuffer(anu.result.male)
KirBotz.sendMessage(from, cowo, image, {quoted: fgi, caption: 'Nih Versi Cowo Nya ^_^' })
KirBotz.sendMessage(from, cewe, image, {quoted: fgi, caption: 'Nih Versi Cewe Nya ^_^' })
break
case 'hsdxd':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
sticWait(from)
				 KirBotz.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./V2/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 KirBotz.sendMessage(from, highschooldxd, image, {quoted: fgi, caption: 'Nih kak '})
				break
case 'sao':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
sticWait(from)
				 KirBotz.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./V2/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 KirBotz.sendMessage(from, swordartonline, image, {quoted: fgi, caption: 'swort art online\nPutraBot'})
				break
case 'lovelive':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
sticWait(from)
				 KirBotz.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./V2/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 KirBotz.sendMessage(from, lovelive, image, {quoted: fgi, caption: 'Nih kak '})
				break
case 'darkjokes':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
sticWait(from)
					data = fs.readFileSync('./V2/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					KirBotz.sendMessage(from, hasil, image, {quoted: fgi, caption: '*GELAP kak :V*'})
				break
case 'meme':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
sticWait(from)
				KirBotz.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./V2/meme.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
                 KirBotz.sendMessage(from, memeall, image, {quoted: fgi, caption: '*PutraBot*'})
				break
case 'tts':
				if (args.length < 1) return KirBotz.sendMessage(from, `ketik ${prefix}tts teks`, text, {quoted: fgi})
				var gtts = require('../V2/gtts')(args[0])
				if (args.length < 2) return KirBotz.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara setan kah?', text, {quoted: fgi})
				dtt = body.slice(8)
				reply(kirr.wait)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
				? reply('Textnya Kepanjangan kak!!')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buffer = fs.readFileSync(rano)
				if (err) return reply(`Error`)
				KirBotz.sendMessage(from, buffer, audio, {quoted: fgi, ptt:true})
				fs.unlinkSync(rano)
				})
				})
				break
case 'fox':  
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Follow yah IG ownerku namanya putraweb.my.id*`, quoted: fgi})
                   break
case 'dog':  
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Follow yah IG ownerku namanya putraweb.my.id*`, quoted: fgi})
                   break
case 'cat':
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Follow yah IG ownerku namanya putraweb.my.id*`, quoted: fgi})
                   break
case 'panda':  
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Follow yah IG ownerku namanya putraweb.my.id*`, quoted: fgi})
                   break
case 'panda1':  
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Follow yah IG ownerku namanya putraweb.my.id*`, quoted: fgi})
                   break
case 'bird': 
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Follow yah IG ownerku namanya putraweb.my.id*`, quoted: fgi})
                   break
case 'koala':  
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   KirBotz.sendMessage(from, anu1, image, {caption: `Follow yah IG ownerku namanya putraweb.my.id*`, quoted: fgi})
                   break
////\\\\\
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    if (args.length == 0) return reply(`Example: ${prefix + command} PutraBot`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow : putraweb.my.id`, quoted : fgi}) 
                    })
                    break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow : putraweb.my.id`, quoted : fgi})
                    })
                    break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Mimin Gantenk`)
                    sticWait(from)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                    KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow : putraweb.my.id`, quoted : akira})
                    })
                    break
case 'tiktok':
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Mimin Gantenk`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow : putraweb.my.id`, quoted : akira})
                    })
                    break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow : putraweb.my.id`, quoted : akira})
                    })
                    break
case 'hentai':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              sticWait(from)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`).then((gambar) => {
              KirBotz.sendMessage(from, gambar, image, { quoted: akira })
}) 
              break
case 'public':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!akira.key.fromMe && !isOwner) return reply(`kata kasar 5`)
if (banChats === false) return
uptime = process.uptime()
banChats = false
fakeyt(`「 *PUBLIC-MODE* 」`)
break
case 'self':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!akira.key.fromMe && !isOwner) return reply(`kata kasar 6`)
if (banChats === true) return
uptime = process.uptime()
banChats = true
fakeyt(`「 *SELF-MODE* 」`)
break
case 'tomp4':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
               if ((isMedia && !akira.message.videoMessage || isQuotedSticker) && args.length == 0) {
               sticWait(from)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
               mediaaa = await KirBotz.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               KirBotz.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: akira, caption: kirr.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(kirr.wrongFormat)
}
               break
case 'tomp3':
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
            if (!isQuotedVideo) return reply('Reply videonya!')
            sticWait(from)
            encmedia = JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            KirBotz.sendMessage(from, buffer453, audio, { mimetype:'audio/mp4', ptt:true, quoted:akira,contextInfo: {forwardingScore: 508, isForwarded: true}})
            fs.unlinkSync(ran)
            })
            break
case 'sticker':
case 'stiker':
case 's':
						if (isMedia && !akira.message.videoMessage || isQuotedImage) {
							var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : akira
							var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, `./WM/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(kirr.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./WM/data.exif ./WM/${sender}.webp -o ./WM/${sender}.webp`, async (error) => {
											if (error) return reply(kirr.error.api)
											KirBotz.sendMessage(from, fs.readFileSync(`./WM/${sender}.webp`), sticker, {quoted: fakeTroli})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./WM/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./WM/${sender}.webp`)
						} else if ((isMedia && akira.message.videoMessage.fileLength < 10000000 || isQuotedVideo && akira.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							var encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : akira
							var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, `./WM/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(kirr.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./WM/data.exif ./WM/${sender}.webp -o ./WM/${sender}.webp`, async (error) => {
											if (error) return reply(kirr.error.api)
											KirBotz.sendMessage(from, fs.readFileSync(`./WM/${sender}.webp`), sticker, {quoted: fakeTroli})
											fs.unlinkSync(media)
											fs.unlinkSync(`./WM/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./WM/${sender}.webp`)
						} else {
							fakeyt(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
case 'toimg':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isQuotedSticker) return fakeyt(' reply stickernya kak')
encmedia = JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await KirBotz.downloadAndSaveMediaMessage(encmedia, './V3/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `PutraBot`)
fs.unlinkSync(ran)
})
break
case 'ttp':  
                    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
                    if (!q) return fakeyt(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp PutraBot`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${q}`)
                    KirBotz.sendMessage(from, anu1, image, {quoted: fgi, caption : `${prefix}s`})
                    break
case 'attp':
           if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
           if (args.length == 0) return fakeyt(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
           KirBotz.sendMessage(from, buffer, sticker, { quoted: fgi })
            break
case 'welcome':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return fakeyt(kirr.only.group)
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *PutraBot* 」`, [
          {
            buttonId: `${prefix}welco enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}welco disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'welco':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
               if (!isGroup) return fakeyt(kirr.only.group)
               if (args.length < 1) return fakeyt('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return fakeyt('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./V3/welcome.json', JSON.stringify(welkom))
               fakeyt('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./V3/welcome.json', JSON.stringify(welkom))
               fakeyt('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               fakeyt('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'antilink':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return fakeyt(kirr.only.group);
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *PutraBot* 」`, [
          {
            buttonId: `${prefix}anti enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}anti disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'anti':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              if (!isGroup) return fakeyt(kirr.only.group)
              if (!isBotGroupAdmins) return fakeyt(`Bot Harus jadi Admin`)
              if (!q) return fakeyt(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return fakeyt(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./V3/antilink.json', JSON.stringify(antilink))
              fakeyt('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              var anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./V3/antilink.json', JSON.stringify(antilink))
              fakeyt('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              fakeyt(`Pilih enable atau disable`)
}
              break
case 'antilinkyt':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return fakeyt(kirr.only.group);
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *PutraBot* 」`, [
          {
            buttonId: `${prefix}antiyt enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}antiyt disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'antiyt':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              if (!isGroup) return fakeyt(kirr.only.group)
              if (!isBotGroupAdmins) return fakeyt(`Bot Harus jadi Admin`)
              if (!q) return fakeyt(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLinkyt) return fakeyt(`Udah aktif`)
              antilinkyt.push(from)
              fs.writeFileSync('./V3/antilinkyt.json', JSON.stringify(antilinkyt))
              fakeyt('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              var anu = antilinkyt.indexOf(from)
              antilinkyt.splice(anu, 1)
              fs.writeFileSync('./V3/antilinkyt.json', JSON.stringify(antilinkyt))
              fakeyt('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              fakeyt(`Pilih enable atau disable`)
}
              break
case 'antilinkwame':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return fakeyt(kirr.only.group);
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *PutraBot* 」`, [
          {
            buttonId: `${prefix}antiwame enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}antiwame disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'antiwame':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              if (!isGroup) return fakeyt(kirr.only.group)
              if (!isBotGroupAdmins) return fakeyt(`Bot Harus jadi Admin`)
              if (!q) return fakeyt(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLinkwame) return fakeyt(`Udah aktif`)
              antilinkwame.push(from)
              fs.writeFileSync('./V3/antilinkwame.json', JSON.stringify(antilinkwame))
              fakeyt('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              var anu = antilinkwame.indexOf(from)
              antilinkwame.splice(anu, 1)
              fs.writeFileSync('./V3/antilinkwame.json', JSON.stringify(antilinkwame))
              fakeyt('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              fakeyt(`Pilih enable atau disable`)
}
              break
case 'antivirtex':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return fakeyt(kirr.only.group);
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *PutraBot* 」`, [
          {
            buttonId: `${prefix}antivrtx enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}antivrtx disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'antivrtx':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
               if (!isGroup) return fakeyt(kirr.only.group)
               if (!isBotGroupAdmins) return fakeyt(`jadiin admin dulu kak 🗿`)
               if (args[0] == "enable") {
               if (isAntiVirtex) return fakeyt("Udah Aktip");
               antivirtex.push(from);
               fs.writeFileSync("./V3/antivirtex.json", JSON.stringify(antivirtex))
               fakeyt("Sukses mengaktifkan fitur antivirtex di group ini ✅")
               } else if (args[0] == "disable") {
               antivirtex.splice(from, 1);
               fs.writeFileSync("./V3/antivirtex.json", JSON.stringify(antivirtex))
               fakeyt("Sukses menonaktifkan fitur antivirtex di group ini ✅")
               } else {
               fakeyt('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'add':
             if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
             if (akira.message.extendedTextMessage === null || akira.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             KirBotz.groupAdd(from, [entah])
             } else {
             entah = akira.message.extendedTextMessage.contextInfo.participant
             KirBotz.groupAdd(from, [entah])
}
             break
case 'kick':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return fakeyt(kirr.only.group)
if (!akira.key.fromMe && !isGroupAdmins) return fakeyt(kirr.only.admin)
if (!q)return fakeyt(`Format Error!\n\nExample : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return fakeyt(kirr.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
KirBotz.groupRemove(from, [y])
fakeyt(`Succses kick target!`)
break
case 'group':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *PutraBot* 」`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `⬡ OPEN `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `⬡ CLOSE`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'opengc':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return fakeyt(kirr.only.group)
if (!isBotGroupAdmins) return fakeyt(`Bot Bukan Admin`)
fakeyt(`Sukses Membuka Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'closegc':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return fakeyt(kirr.only.group)
if (!isBotGroupAdmins) return fakeyt(`Bot Bukan Admin`)
fakeyt(`Sukses Menutup Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgc':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
		     	   if (!isGroup) return fakeyt(kirr.only.group)
                   if (!isBotGroupAdmins) return fakeyt(`Bot Bukan Admin`)
			       linkgc = await KirBotz.groupInviteCode(from)
				   yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
				   KirBotz.sendMessage(from, yeh, text, { quoted: fgi })
				   break
case 'setname':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!q) return reply(`Nama?`)
if (!isGroup) return reply(kirr.only.group)
if (!akira.key.fromMe && !isOwner) return reply(`kata kasar 7\nKhusus Owner kak`)
if (!isBotGroupAdmins) return reply(kirr.only.Badmin)
KirBotz.groupUpdateSubject(from, `${body.slice(9)}`)
KirBotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setdesc':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!q) return reply(`teks?`)
if (!isGroup) return reply(kirr.only.group)
if (!akira.key.fromMe && !isOwner) return reply(`kata kasar 8\nKhusus Owner kak`)
if (!isBotGroupAdmins) return reply(kirr.only.Badmin)
KirBotz.groupUpdateDescription(from, `${body.slice(9)}`)
KirBotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'tagall':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
       if (!akira.key.fromMe && !isOwner) return reply(`kata kasar 9\nKhusus Owner kak`)
       if (!q) return reply('Teks?')
       if (!isGroup) return reply(kirr.only.group)
              var arr = [];
              var txti = `*[ TAG ALL BY PutraBot ]*\n\n${q ? q : ''}\n`
              for (var i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'hidetag':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
      if (!akira.key.fromMe && !isOwner) return reply(`kata kasar 10\nKhusus Owner Kak`)
      if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
      if (!isGroup) return reply(kirr.only.group)
             try {
             quotedText = akira.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
case 'afk': 
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgi})
              if (!isGroup) return reply(`Khusus Group kak`)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              var reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              var aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
						break
//////////
case 'bugtagall':
if (!akira.key.fromMe && !isOwner) return reply(`kata kasar 11\nKhusus Owner Kak`)
if(!q) return reply('Teks??')
if (!isGroup) return reply(`Khusus Group`)
var nom = akira.participant
members_id = []
	teks = '\n'
	for (var mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`${q}. *Kata kasar 12    ${q} Xixi ${jadivirtex1}`+teks+`┗━ *「 PutraBot 」* `, members_id, false)
break
//////
default:
if (budy.startsWith('kr')){
if (!akira.key.fromMe) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
	}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('ERROR : %s', color(e, 'magenta'))
        }
	}
}