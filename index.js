const Discord = require('discord.js');
const fs = require('fs');
const { prefix } = require('./config.json');
require('dotenv').config();

const Client = require('./client/Client');

const client = new Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

console.log(client.commands);

client.on('ready', () => {
  console.log(`${client.user.tag} olarak aktif.`);

  client.user.setPresence({
      status: 'online',
      activity: {
          name: "?help",
          type: "LISTENING"
      }
  });
});

client.on('message', async message => {
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	try {
		if (commandName == "userinfo") {
			command.execute(message, client);
		} else {
			command.execute(message);
		}
	} catch (error) {
		console.error(error);
		message.reply('Komut çalıştırılırken bir hata oluştu.');
	}
});

client.login(process.env.TOKEN);
