const Commando = require("discord.js-commando");
const client = new Commando.Client();

client.registry.registerGroup("random",'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

const token = "Mjk0OTYwMDgwMjcxNDQxOTIw.C7cwKg.HVfnIalu_3L14acCdW0jTqfK2YQ";
var prefix = ".";
var mention = "<@294960080271441920>";
var memberCount = client.users.size;
var servercount = client.guilds.size;

client.on("ready", () => {
	var servers = client.guilds.array().map(g => g.name).join(',');
	console.log("--------------------------------------");
console.log('[!]Connexion en cours... \n[!]Veuillez Patienté! \n[!]Les évenement sont après ! :)  \n[!]Les préfix actuelle:  ' + prefix + "\n[!]Mentions = " + mention + "\n[!]Nombre de membres: " + memberCount + "\n[!]Nombre de serveurs: " + servercount);
});

client.on('message', message => {
	if (message.content === ("salut")){
	message.reply('Salut à toi ! ');
} else if (message.content === ("bonjour")){
	message.reply('bonjour à toi ');
} else if(message.content.startsWith('!botname')){
	client.user.setUsername(message.content.substr(9));
} else if (message.content === "!stats") {
	let m = " ";
	m += 'Il y a actuellement  ${message.guild.channels.size} channels sur ce serveurs \n';
	m += 'je suis en compagnie de ${message.guild.members.size} membres';
	m += 'je suis présent dans ${client.guild.size} serveurs \n';
	message.author.sendMessage(m).catch(console.log); 
}
});

client.login(token)