const express = require('express');
const app = express();

app.listen(() => console.log('Starting.'));
app.listen(() => console.log('Starting...'));
app.use('/ping', (req, res) => {
    res.send(new Date());
});
const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const moha = require('mohamedamine') //by bader
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const probot = require("probot-tax");
const jimp = require("jimp");
const guild = require('guild');
const db = require('quick.db');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

client.on('ready', () => {
    client.user.setActivity(`${prefix}help`);
    app.listen(() => console.log('Bot Started'));
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    var _0x4b37 = ["\x62\x79\x20\x62\x61\x64\x65\x72\x20\uD83D\uDE09", "\x6C\x6F\x67"];
    console[_0x4b37[1]](`${_0x4b37[0]}`)
}); //by bader
const prefix = "!" //بادئه البوت
const developers = "" //ايديك

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
//by bader
let auto = JSON.parse(fs.readFileSync("./auto.json", 'utf8'));
client.on('message', msg => {
    if (msg.content.startsWith(prefix + "auto role")) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("You do not have permissions") //by bader
        if (auto[msg.guild.id]) return msg.channel.send("Auto Role Rank has already been activated")
        var role = msg.mentions.roles.first();
        if (!role) return msg.channel.send("I did not find a roller or this one but a role")
        auto[msg.guild.id] = {
            rolejoin: role.id,
        }
        fs.writeFile("./auto.json", JSON.stringify(auto), (err) => {
            if (err)
                console.error(err);
            msg.channel.send("تم ")

        })
    }
})
client.on('guildMemberAdd', member => {
    if (!auto[member.guild.id]) return;

    let rolejoin = member.guild.roles.cache.find(role => role.id === `${auto[member.guild.id].rolejoin}`);
    if (!rolejoin) return;
    member.roles.add(rolejoin);

})
var _0xd2cd = ["\x6D\x65\x73\x73\x61\x67\x65", "\x72\x6F\x6C\x65", "\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68", "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "\x63\x6F\x6E\x74\x65\x6E\x74", "\x66\x69\x72\x73\x74", "\x75\x73\x65\x72\x73", "\x6D\x65\x6E\x74\x69\x6F\x6E\x73", "\x4D\x41\x4E\x41\x47\x45\x5F\x52\x4F\x4C\x45\x53", "\x68\x61\x73\x50\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E", "\x6D\x65\x6D\x62\x65\x72", "\x75\x73\x65\x72", "\x67\x75\x69\x6C\x64", "\x3A\x78\x3A\x20\x2A\x2A\x49\x27\x6D\x20\x6D\x69\x73\x73\x69\x6E\x67\x20\x74\x68\x65\x20\x70\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x20\x5C\x60\x4D\x41\x4E\x41\x47\x45\x20\x52\x4F\x4C\x45\x53\x5C\x60", "\x63\x68\x61\x6E\x6E\x65\x6C", "\x20", "\x6A\x6F\x69\x6E", "\x73\x6C\x69\x63\x65", "\x73\x70\x6C\x69\x74", "\x75\x73\x65\x72\x6E\x61\x6D\x65", "\x61\x75\x74\x68\x6F\x72", "\x73\x65\x74\x41\x75\x74\x68\x6F\x72", "\x2A\x2A\x50\x6C\x61\x73\x65\x20\x4D\x65\x6E\x74\x69\x6F\x6E\x20\x54\x68\x65\x20\x55\x73\x65\x72\x2A\x2A", "\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E", "\x64\x69\x73\x70\x6C\x61\x79\x48\x65\x78\x43\x6F\x6C\x6F\x72", "\x73\x65\x74\x43\x6F\x6C\x6F\x72", "\x73\x65\x6E\x64", "\x2A\x2A\x53\x70\x65\x63\x69\x66\x79\x20\x61\x20\x72\x6F\x6C\x65\x2A\x2A", "\x69\x6E\x64\x65\x78\x4F\x66", "\x6E\x61\x6D\x65", "\x66\x69\x6C\x74\x65\x72", "\x63\x61\x63\x68\x65", "\x72\x6F\x6C\x65\x73", "\u274C\x20\x2A\x2A\x52\x6F\x6C\x65\x20\x6E\x6F\x74\x20\x66\x6F\x75\x6E\x64\x2E\x2A\x2A", "\x69\x64", "\x73\x6F\x6D\x65", "\x6D\x65\x6D\x62\x65\x72\x73", "\x72\x65\x6D\x6F\x76\x65", "\u2705\x2A\x2A\x20\x52\x65\x6D\x6F\x76\x65\x64\x20\x5C\x60", "\x5C\x60\x20\x52\x6F\x6C\x65\x20\x46\x72\x6F\x6D\x20", "\x2A\x2A", "\x61\x64\x64", "\u2705\x2A\x2A\x20\x41\x64\x64\x65\x64\x20\x5C\x60", "\x5C\x60\x20\x52\x6F\x6C\x65\x20\x74\x6F\x20", "\x6F\x6E"];
client[_0xd2cd[44]](_0xd2cd[0], (_0x995ex1) => {
    if (_0x995ex1[_0xd2cd[4]][_0xd2cd[3]]()[_0xd2cd[2]](prefix + _0xd2cd[1])) {
        const _0x995ex2 = _0x995ex1[_0xd2cd[7]][_0xd2cd[6]][_0xd2cd[5]]();
        if (!_0x995ex1[_0xd2cd[10]][_0xd2cd[9]](_0xd2cd[8])) { return };
        if (!_0x995ex1[_0xd2cd[12]][_0xd2cd[10]](client[_0xd2cd[11]])[_0xd2cd[9]](_0xd2cd[8])) { return _0x995ex1[_0xd2cd[14]](`${_0xd2cd[13]}`) };
        var _0x995ex3 = _0x995ex1[_0xd2cd[4]][_0xd2cd[18]](_0xd2cd[15])[_0xd2cd[17]](2)[_0xd2cd[16]](_0xd2cd[15]);
        if (!_0x995ex3[0]) { return _0x995ex1[_0xd2cd[14]][_0xd2cd[26]](new Discord.MessageEmbed()[_0xd2cd[25]](_0x995ex1[_0xd2cd[10]][_0xd2cd[24]])[_0xd2cd[23]](`${_0xd2cd[22]}`)[_0xd2cd[21]](_0x995ex1[_0xd2cd[20]][_0xd2cd[19]])) };
        if (!_0x995ex3[1]) { return _0x995ex1[_0xd2cd[14]][_0xd2cd[26]](new Discord.MessageEmbed()[_0xd2cd[25]](_0x995ex1[_0xd2cd[10]][_0xd2cd[24]])[_0xd2cd[23]](`${_0xd2cd[27]}`)[_0xd2cd[21]](_0x995ex1[_0xd2cd[20]][_0xd2cd[19]])) };
        var _0x995ex4 = _0x995ex1[_0xd2cd[4]][_0xd2cd[3]]()[_0xd2cd[18]](_0xd2cd[15])[_0xd2cd[17]](2)[_0xd2cd[16]](_0xd2cd[15])[_0xd2cd[3]]();
        var _0x995ex5 = _0x995ex1[_0xd2cd[12]][_0xd2cd[32]][_0xd2cd[31]][_0xd2cd[30]]((_0x995ex6) => { return _0x995ex6[_0xd2cd[29]][_0xd2cd[3]]()[_0xd2cd[28]](_0x995ex4) > -1 })[_0xd2cd[5]]();
        if (!_0x995ex5) { return _0x995ex1[_0xd2cd[14]][_0xd2cd[26]](`${_0xd2cd[33]}`) };
        if (_0x995ex1[_0xd2cd[7]][_0xd2cd[36]][_0xd2cd[5]]()[_0xd2cd[32]][_0xd2cd[31]][_0xd2cd[35]]((_0x995ex4) => { return _0x995ex4[_0xd2cd[34]] === _0x995ex5[_0xd2cd[34]] })) {
            _0x995ex1[_0xd2cd[7]][_0xd2cd[36]][_0xd2cd[5]]()[_0xd2cd[32]][_0xd2cd[37]](_0x995ex5);
            _0x995ex1[_0xd2cd[14]][_0xd2cd[26]](`${_0xd2cd[38]}${_0x995ex5[_0xd2cd[29]]}${_0xd2cd[39]}${_0x995ex2[_0xd2cd[19]]}${_0xd2cd[40]}`)
        };
        if (!_0x995ex1[_0xd2cd[7]][_0xd2cd[36]][_0xd2cd[5]]()[_0xd2cd[32]][_0xd2cd[31]][_0xd2cd[35]]((_0x995ex4) => { return _0x995ex4[_0xd2cd[34]] === _0x995ex5[_0xd2cd[34]] })) {
            _0x995ex1[_0xd2cd[7]][_0xd2cd[36]][_0xd2cd[5]]()[_0xd2cd[32]][_0xd2cd[41]](_0x995ex5);
            _0x995ex1[_0xd2cd[14]][_0xd2cd[26]](`${_0xd2cd[42]}${_0x995ex5[_0xd2cd[29]]}${_0xd2cd[43]}${_0x995ex2[_0xd2cd[19]]}${_0xd2cd[40]}`)
        }
    }
})
client.on('message', bader => {
    if (bader.content === prefix + 'help') {
        let embed = new Discord.MessageEmbed()
            .setTitle(`:envelope_with_arrow: command list :envelope_with_arrow:`)
            .addField(`:sparkles:  command :sparkles:`, `**=====================**`)
            .addField(` 
role @member neme role - يعطيه او يزيل رتبه
auto role @role - يفعل الاوتو رول
`)
            .addField('**Links**', `**[Server support](Server support link here) | [Add BOt](Invite bot link here)**`)
            .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
            .setFooter(`Bot Prefix : [${prefix}]`)
        bader.channel.send(embed);
    }
});
client.login(process.env.token);