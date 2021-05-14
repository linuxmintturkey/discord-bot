module.exports = {
	name: 'stop',
	description: 'durdur.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('Ses kanalında olman gerekiyor.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
	},
};