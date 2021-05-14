module.exports = {
	name: 'np',
	description: 'çalan şarkıyı yazdır.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Şu an hiçbir şey çalmıyor.');
		return message.channel.send(`Çalan şarkı: ${serverQueue.songs[0].title}`);
	},
};