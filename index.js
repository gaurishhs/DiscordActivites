const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require("node-fetch");
const prefix = '-'; //Change Prefix Here
// Made for Github by apidev234 ;-;
const helpembed = new Discord.MessageEmbed()
    .setColor('#ffc83d')
    .setTitle('Commands')
    .setDescription("So here's what i Can do!", "```Misc```****-help**** *get some help*\n****-invite**** *invite my bot*\n\
```Activities```****-YouTube-together**** *Watch some youtube with your friend!*\n****-poker**** *Play some poker with your friend!*\n****-betrayal**** *Wanna play among us from discord?*\n****-fishing**** *Catch some fish with your friend!*\
")
    .setFooter('Activites in voice Channel [By ShinchanPlayZ](https://github.com/apidev234/)')

client.on('ready', () => {
    console.log(`Activites : Logged in as ${client.user.tag}`);
    client.user.setActivity("-help || Im Something Epic Try Me Once :D", {
        type: "WATCHING"
    });
});

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    var args = message.content.match(/[^_\W]+/g);
    args = (args == null) ? "" : args.join(' ').toLowerCase().trim().split(/ +/g);
    var cmd = (args != "" && message.content.charAt(0) === prefix) ? args.shift() : false;
    if (cmd === `youtube-together`) {
        if (!message.channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | Missing permission: `Create Invite`");
        if (!message.member.voice.channel) return message.channel.send("To use this command, you must join a voice channel.")
        fetch(`https://discord.com/api/v8/channels/${message.member.voice.channelID}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913", // this is youtube together 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(data => {
            message.channel.send(`
			✅ **Party created!**\nℹ️ Use the Referral link to join the party and invite your friends.\n\nReferral Link: https://discord.gg/${data.code}
			`);
        }).catch(e => {
            message.channel.send("❌ | Could not start **YouTube Together**!");
        })
    }

    if (cmd === `poker`) {
        if (!message.member.voice.channel) return message.channel.send("To use this command, you must join a voice channel.")
        fetch(`https://discord.com/api/v8/channels/${message.member.voice.channelID}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755827207812677713", //this is for poker
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(data => {
            message.channel.send(`
			✅ **Party created!**\nℹ️ Use the Referral link to join the party and invite your friends.\n\nReferral Link: https://discord.gg/${data.code}
			`);
        }).catch(e => {
            message.channel.send("❌ | Could not start **Poker Night**!");
        })
    }

    if (cmd === `betrayal`) {
        if (!message.member.voice.channel) return message.channel.send("To use this command, you must join a voice channel.")
        fetch(`https://discord.com/api/v8/channels/${message.member.voice.channelID}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "773336526917861400", //this is Betrayal
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(data => {
            message.channel.send(`
            ✅ **Party created!**\nℹ️ Use the Referral link to join the party and invite your friends.\n\nReferral Link: https://discord.gg/${data.code}
            `);
        }).catch(e => {
            message.channel.send("❌ | Could not start **Betrayal.io**!");
        })
    }

    if (cmd === `fishing`) {
        if (!message.member.voice.channel) return message.channel.send("To use this command, you must join a voice channel.")
        fetch(`https://discord.com/api/v8/channels/${message.member.voice.channelID}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "814288819477020702", // this is fishing together
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(data => {
            message.channel.send(`
            ✅ **Party created!**\nℹ️ Use the Referral link to join the party and invite your friends.\n\nReferral Link: https://discord.gg/${data.code}
            `);
        }).catch(e => {
            message.channel.send("❌ | Could not start **Fishington.io**!");
        })
    }

    if (cmd === `help`) {
        if (!message.channel.permissionsFor(message.guild.me).has("EMBED_LINKS")) return message.channel.send("❌ | Missing permission: `EMBED_LINKS`");
        message.channel.send(helpembed)
    }

    if (cmd === `invite`) {
        message.channel.send("https://discord.com/oauth2/authorize?client_id='CLIENT_ID_HERE'&scope=bot&permissions=16385")
    }

    if (cmd === `stats`) {
        guildcount = client.guilds.cache.size
        membercount = client.users.cache.size
        channelcount = client.channels.cache.size
        const statsembed = new Discord.MessageEmbed()
            .setColor('#ffc83d')
            .setTitle('Youtube Together')
            .addFields(
                { name: 'Guilds', value: guildcount, inline: true },
                { name: 'Users', value: membercount, inline: true },
                { name: 'Channels', value: channelcount, inline: true },
            )
            .setFooter("Activities in Voice Channel")

        message.channel.send(statsembed)
    }
});
client.login(process.env.DISCORD_TOKEN);
