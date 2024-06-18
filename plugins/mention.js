Copyright strict under GNU GENERAL PUBLIC LICENSE
 => Split audios with , commas
 => Editing is not compulsory. If need to change audio, then edit
 
*/
const {SUDO} = require('../config');
var duration = 19998000
var audios = `https://i.imgur.com/5PoNdG5.mp4,https://i.imgur.com/Y8s8hTJ.mp4,https://i.imgur.com/80ZpjQV.mp4,https://i.imgur.com/VXOOJS5.mp4`;
const {getAudioBufferFromLink,skbuffer} = require('dexter-bots/rcd-md')
const {readFileSync} = require('fs')
const {Module} = require('../main');
// Module({pattern: 'mention ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {return;}));
Module({on: 'text' ,fromMe: false}, (async (message, match) => {
var jids = audios.split(',').filter(link => link.includes('mp4'));
try {var men = message.mention[0].split('@')[0]} catch {return;}
if (message.mention && message.mention[0] && SUDO.includes(men)) {
var waveform = Array.from({length: 15}, () => Math.floor(Math.random() * 100)); // use this for fancy: [0,99,0,99,0,99]
getAudioBufferFromLink(jids[Math.floor(Math.random()*jids.length)],async function(audio) {
if (audio) {
return message.client.sendMessage(message.jid, {audio,mimetype: 'audio/mp4',ptt: true,waveform }, { quoted: message.data })}
})}
}));
