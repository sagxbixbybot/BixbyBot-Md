import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone'

global.botnumber = ""
global.confirmCode = ""

//no quites los numeros que contengan "true"
global.owner = [
 ['5491168758497', '👑 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 👑', true],
 ['593939005387', '🛡️ 𝗝𝗼𝘀𝘁𝗶𝗻 𝗢𝘄𝗻𝗲𝗿 𝗢𝗙𝗖 🛡️', true],
 ['17202635863', '𝗢𝘄𝗻𝗲𝗿2', true],
 ['50558124470', 'Ender Owner3', true]]


global.suittag = ['5491168758497'];
global.prems = ['5491168758497'];


global.packname = '🌷 𝙳𝙸𝙰𝙱𝙻𝙰𝙱𝙾𝚃-𝙼𝙳 🌹';
global.author = '𝐃𝐢𝐚𝐛𝐥𝐚𝐁𝐨𝐭';
global.wm = '🍁 𝕯𝖎𝖆𝖇𝖑𝖆𝕭𝖔𝖙-𝕸𝕯 🌸';
global.sk = '🌹 𝐃𝐢𝐚𝐛𝐥𝐚𝐌𝐃 💮';
global.titulowm = '🍁 𝖣𝗂𝖺𝖻𝗅𝖺 : 𝖡𝗈𝗍🪷';
global.titulowm2 = `𝖣𝗂𝖺𝖻𝗅𝖺 : 𝖡𝗈𝗍 - 𝖬𝖣 ☘️`
global.igfg = '𝘋𝘪𝘢𝘣𝘭𝘪𝘵𝘢𝘉𝘰𝘵-𝘔𝘋';
global.wait = '*⏳ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*';
global.vs = '1.5.5';


global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/NaufraMD.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./Menu6.jpg')
global.imagen8 = fs.readFileSync('./Menu4.jpg')


global.gp1 = 'https://chat.whatsapp.com/DCjR7iTdg5q3Si4TbuwRjR'
global.gp2 = 'https://www.paypal.me/ColaboracionBotOFC'
global.gp3 = 'https://www.instagram.com/naufrazapp?igsh=Y2g1ZXJxbm53eXAy'
global.gp4 = 'https://www.tiktok.com/@naufra.zapp?_t=8kcJigwvtji&_r=1'
global.gp5 = 'https://chat.whatsapp.com/CH6Kc8UEpASLJCVasfZOuC' //colaboración
global.channel = 'https://whatsapp.com/channel/0029VaFbERfFnSz5zeyfpi3L'
global.paypal = ''
global.yt = 'https://youtube.com/@Enzito-19'
global.md = 'https://github.com/EnzoVaselevich/DiablaBot-MD-OFC-'
global.fb = 'https://www.facebook.com/share/8XyV52kz3sfhrzft/?mibextid=qi2Omg'

//MENSAJES RANDOM:
global.naufraMenus = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8]
global.naufraRedes = [gp1, gp2, gp3, gp4, channel, paypal, yt, md, fb]


var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Mañana'; break; case 1: hour = 'Linda Mañana'; break; case 2: hour = 'Linda Mañana'; break; case 3: hour = 'Linda Mañana'; break; case 4: hour = 'linda mañana'; break; case 5: hour = 'Linda Mañana'; break; case 6: hour = 'Linda Mañana'; break; case 7: hour = 'Linda Mañana'; break; case 8: hour = 'Linda Mañana'; break; case 9: hour = 'Linda Mañana'; break; case 10: hour = 'Lindo Dia'; break; case 11: hour = 'Lindo Dia'; break; case 12: hour = 'Lindo Dia'; break; case 13: hour = 'Lindo Dia'; break; case 14: hour = 'Linda Tarde'; break; case 15: hour = 'Linda Tarde'; break; case 16: hour = 'Linda Tarde'; break; case 17: hour = 'Linda Tarde'; break; case 18: hour = 'Linda Noche'; break; case 19: hour = 'Linda Noche'; break; case 20: hour = 'Linda Noche'; break; case 21: hour = 'Linda Noche'; break; case 22: hour = 'Linda Noche'; break; case 23: hour = 'Linda Noche'; break;}
global.saludo = '🌹' + hour;

global.mods = [];

global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});


global.wm2 = `${dia} ${fecha}\nNaufraBot`;
global.gt = 'DiablaBot';
global.mysticbot = '𝗗𝗜𝗔𝗕𝗟𝗔𝗕𝗢𝗧-𝗠𝗗🌸';
global.mysticbot = 'https://whatsapp.com/channel/0029VaFbERfFnSz5zeyfpi3L';
global.waitt = '*⏳ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*';
global.waittt = '*⏳ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*';
global.waitttt = '*⏳ 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾....*';
global.nomorown = '5491168758497';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*📆 Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*⏰ Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];


const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
