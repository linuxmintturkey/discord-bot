module.exports = {
	name: 'purge',
	description: 'son mesajları sil. <2-100 arası>',
	async execute(message) {
		const args = message.content.split(' ');
		let deleteCount = 0;
		try {
			deleteCount = parseInt(args[1], 10);
		}catch(err) {
			return message.reply('Silmek istediğiniz mesaj sayısını ekleyin. <2-100>')
		}
        

		if (!deleteCount || deleteCount < 2 || deleteCount > 100)
			return message.reply('Silmek istediğiniz mesaj sayısını ekleyin. <2-100>');

		const fetched = await message.channel.messages.fetch({
			limit: deleteCount,
		});
		message.channel.bulkDelete(fetched)
			.catch(error => message.reply(`Mesaj silinemedi. Çünkü: ${error}`));
	},
};