module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - La musica ha acabado no hay nadie en el canal de voz`);
};