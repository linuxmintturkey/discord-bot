const { getUserFromMention } = require('../util/getUser')

module.exports = {
	name: 'userinfo',
	description: 'kullanıcı bilgisini getir. <komut + kullaniciAdi>',
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const user = getUserFromMention(args[0], client);
		message.channel.send(`Ad: ${user.username}, ID: ${user.id}, Avatar: ${user.displayAvatarURL({ dynamic: true })}`);
	}
};