import fetch from 'node-fetch';
import axios from 'axios';
import yts from 'yt-search';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import ytdl from 'ytdl-core';
import {bestFormat, getUrlDl} from '../lib/y2dl.js';
import YTDL from "../lib/ytdll.js";
import fs from "fs";
let limit1 = 100;
let limit2 = 400;
let limit_a1 = 50;
let limit_a2 = 400;
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) throw `> ⓘ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙘𝙖𝙣𝙘𝙞𝙤𝙣 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙚`;
  try {
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'play') {
      additionalText = 'audio 🔊';
    } else if (command === 'youtube') {
      additionalText = 'video 📽';
    }
    await conn.sendMessage(m.chat, { react: { text: '⏳️', key: m.key } })
    const texto1 = `♡₊˚ ₊✧♡₊˚ 📎・₊✧★🎸🎧°⋆♡₊˚ 🛰️
> ⓘ 𝙏𝙄𝙏𝙐𝙇𝙊/𝙉𝙊𝙈𝘽𝙍𝙀:
> • ${yt_play[0].title}
> •┄┄┄┄┄┄┄┄┄┄┄┄•
> ⓘ 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊 𝙀𝙉: 
> • ${yt_play[0].ago}
> •┄┄┄┄┄┄┄┄┄┄┄┄•
> ⓘ 𝙇𝙄𝙉𝙆/𝙀𝙉𝙇𝘼𝘾𝙀:
> • ${yt_play[0].url}
♡₊˚ 🛰️₊✧♡₊˚ 📎・₊✧★🎸🎧°⋆♡₊˚ 📎
01:06 ======⬤------------------------- ${secondString(yt_play[0].duration.seconds)}
               ⇆ㅤ ◁ㅤ❚❚ㅤ▷ㅤ ↻

> *_Enviando ${additionalText}, Aguarde Un Momento..._*
`.trim();
        conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
    if (command == 'play') {
    try {    
    const q = '128kbps';
    const v = yt_play[0].url;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size_Api = await yt?.size;
    const sizeApi = size_Api?.replace('MB', '')?.replace('GB', '')?.replace('KB', '')   
    const sex = await getBuffer(dl_url)
    const fileSizeInBytes = sex.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const size = fileSizeInMB.toFixed(2);    
    if (size >= limit_a2) {  
    await conn.sendMessage(m.chat, {text: `> ⓘ 𝙋𝙪𝙚𝙙𝙚 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙨𝙪 𝙖𝙪𝙙𝙞𝙤 𝙚𝙣: ${dl_url}*`}, {quoted: m});
    return;    
    }     
    if (size >= limit_a1 && size <= limit_a2) {  
    await conn.sendMessage(m.chat, {document: sex, mimetype: 'audio/mpeg', fileName: ttl + `.mp3`}, {quoted: m});   
    return;
    } else {
    await conn.sendMessage(m.chat, {audio: sex, mimetype: 'audio/mpeg', fileName: ttl + `.mp3`}, {quoted: m});   
    return    
    }} catch {
    try {      
    let info = await ytdl.getInfo(yt_play[0].videoId);
    let format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
    let buff = ytdl.downloadFromInfo(info, { format: format });
    let bufs = []
        buff.on('data', chunk => { bufs.push(chunk) })
        buff.on('end', async () => {
    let buff = Buffer.concat(bufs)
    conn.sendMessage(m.chat, {audio: buff, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
    })} catch {
    await YTDL.mp3(yt_play[0].url).then(async (s) => {
    throw '*[❗] Error, por favor vuelva a intentarlo.*';
  }
};
handler.help = ['play', 'play2'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(play|play2)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}

const getBuffer = async (url, options) => {
    options ? options : {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'});
    return res.data;
};*/
