module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en el mismo canal unu`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Porfavor indica un nombre de la cancion`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};