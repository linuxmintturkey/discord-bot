module.exports = {
	name: 'skip',
	description: 'şarkıyı geç.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!message.member.voice.channel) return message.channel.send('Ses kanalında olman gerekiyor.');
		if (!serverQueue) return message.channel.send('Geçilecek şarkı yok.');
		serverQueue.connection.dispatcher.end();
	},
};