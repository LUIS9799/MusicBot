module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - No hay resulatdos ${query} !`);
};