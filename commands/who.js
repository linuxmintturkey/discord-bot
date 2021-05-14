module.exports = {
	name: 'contact',
	description: 'sorun anında ulaşılacak kişileri getir.',
    execute(message) {
        message.channel.send('herhangi bir sorun için @admin etiketini kullanabilir, @hydrobios, @yildirim.dev ulaşabilirsiniz.');
    }
}