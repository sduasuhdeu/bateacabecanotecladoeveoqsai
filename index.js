const Discord = require('discord.js');
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const superagent = require('superagent');
const Webhook = require('webhook-discord');
const LothusHook = new Webhook('https://discordapp.com/api/webhooks/444692509554245632/nXKkOHrD5U6ZgcjEVHsUtVI4IUpE6IfE_MVWx4UiJ7yYZYWKhfZGyUNsUiOwRV3DBwnI', 'Lothus - ChangeLog', )

const client = new Discord.Client();

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Iniciado.'));

client.on('disconnect', () => console.log('Desconectado'));

client.on('reconnecting', () => console.log('Reconectando...'));

client.on('ready', () =>{
	
    client.user.setActivity('!comandos',
    {type: 'PLAYING', url: 'https://twitch.tv/wiigevaerd'});
    console.log('────────────────────────────');
    console.log('     LothusBOT iniciado     ');
    console.log('────────────────────────────');
});


client.on('message', msg =>{
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) {

		if(msg.channel.parentID == "382259732397686794") {

			if(msg.channel.id == "399761197316177920" || msg.channel.id == "399761260448841728" || msg.channel.id == "404008790711861268" || msg.channel.id == "404008900480729100" ||  msg.channel.id == "433302626596159499" ||  msg.channel.id == "433062254557265922" || msg.channel.id == "404009364534329358") {
				return;
			}

			console.log(`[STAFF] [${msg.channel.name}] ${msg.author.username}: ${msg.content}`);

		}

	}

	if(msg.content.startsWith("!addchangelog")) {


	if(!msg.member.roles.find("name", "💻 Discord Developer")) {
			msg.channel.send(":x: **Acesso Negado:** Operação cancelada.");
			return;
		}


		let change = msg.content.split(' ').slice(1).join(' ');


		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
		
		if(dd<10) {
			dd = '0'+dd
		} 
		
		if(mm<10) {
			mm = '0'+mm
		} 
		
		getData = dd + '/' + mm + '/' + yyyy;

		LothusHook.custom("Lothus - Changelog",`:white_small_square: ${change}`,`${getData}`,"#eac231", "");
		
		msg.channel.send(":white_check_mark: Operação efetuada com Sucesso");
	}
});

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length);

	if(command == "comandos") {
		
		if(msg.channel.id != "402303684429611018") {
			return;
		}

		msg.delete().catch(O_O=>{});

		var embed = new Discord.RichEmbed()
		.setAuthor("LothusMusica - Comandos", client.user.avatarURL)
		.addBlankField()
		.setColor('#365be2')
		.addField("- !help", "Mostra esta lista de comandos.")
		.addField("- !play", "Utilizado para adicionar uma música na lista")
		.addField("- !pause", "Pausa a música atual")
		.addField("- !resume", "Continua a música atual caso esteja pausada")
		.addField("- !skip", "Pula a música atual para próxima da lista")
		.addField("- !volume", "Altera o volume da música")
		.addField("- !np", "Mosta a música atual que está tocando")
		.addBlankField()
		.addField("Desenvolvido por:", "HyperGalactic e wiigevaerd")
	        .addBlankField()
		.addField("Versão", "1.0.0")
	        .addBlankField()
		.setTimestamp()
		.setFooter("LothusMusica BETA");

		msg.channel.send({embed});
	}
	
		if(command == "status1234567890") {
		
		if(msg.channel.id != "402303684429611018") {
			return;
		}

		msg.delete().catch(O_O=>{});

		var embed = new Discord.RichEmbed()
		.setAuthor("LothusMusica - Status", client.user.avatarURL)
		.addBlankField()
		.setColor('#e0d90d')
		.addField(":warning: EM MANUTENÇÃO :warning:", "O bot pode ficar instável nesse período ^-^")
		.addBlankField()
		.addField("Desenvolvedor aplicando as atualizações:", "<@229025905014472705>")
		.addBlankField()
		.addField("ID da atualização:", "d13052d9")
		.addBlankField()
		.addField("Desenvolvido por:", "HyperGalactic e wiigevaerd")
	        .addBlankField()
		.addField("Versão", "1.0.0")
	        .addBlankField()
		.setTimestamp()
		.setFooter("LothusMusica BETA");

		msg.channel.send({embed});
	}
	
	        if(command == "status0987654321") {
		
		if(msg.channel.id != "402303684429611018") {
			return;
		}

		msg.delete().catch(O_O=>{});

		var embed = new Discord.RichEmbed()
		.setAuthor("LothusMusica - Status", client.user.avatarURL)
		.addBlankField()
		.setColor('#0de01b')
		.addField(":white_check_mark: ESTÁVEL :white_check_mark:", "O bot ja está pronto para uso ^-^")
		.addBlankField()
		.addField("Desenvolvedor que aplicou as atualizações:", "<@229025905014472705>")
		.addBlankField()
		.addField("ID da atualização:", "f18ba0c")
		.addBlankField()
		.addField("Desenvolvido por:", "HyperGalactic e wiigevaerd")
	        .addBlankField()
		.addField("Versão", "1.0.2")
	        .addBlankField()
		.setTimestamp()
		.setFooter("LothusMusica BETA");

		msg.channel.send({embed});
	}
	
	if (command === 'play') {

		if(msg.channel.id != "402303684429611018") {
			return;
		}

		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('Você tem que estar em um canal para colocar uma musica');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('Não tenho permissões para entrar no canal');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('Não tenho permissões para entrar nesse canal');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`? Playlist: **${playlist.title}** foi adicionado a queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Seleção de musica:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Escolha uma musica de 1-10.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('Nenhuma mensagem valida enviada');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('Não consegui encontrar nenhum video.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {

		
		if(msg.channel.id != "402303684429611018") {
			return;
		}


		if(!msg.member.hasPermission("MANAGE_MESSAGES")) {
			return msg.channel.send("Você não tem permissão para este comando");
		}

		if (!msg.member.voiceChannel) return msg.channel.send('Você não está em nenhum canal');
		if (!serverQueue) return msg.channel.send('Não tem nenhuma musica para dar skip.');
		serverQueue.connection.dispatcher.end('Deram skip');
		return undefined;
	} else if (command === 'stop') {
		
		if(msg.channel.id != "402303684429611018") {
			return;
		}

		if(!msg.member.hasPermission("MANAGE_MESSAGES")) {
			return msg.channel.send("Você não tem permissão para este comando");
		}

		if (!msg.member.voiceChannel) return msg.channel.send('Você não está em nenhum canal');
		if (!serverQueue) return msg.channel.send('Não tem nenhuma musica para dar stop');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Deram stop.');
		msg.channel.send("A musica foi parada.")
		return undefined;
	} else if (command === 'volume') {

		if(msg.channel.id != "402303684429611018") {
			return;
		}

		if(!msg.member.hasPermission("MANAGE_MESSAGES")) {
			return msg.channel.send("Você não tem permissão para este comando");
		}

		if (!msg.member.voiceChannel) return msg.channel.send('Você não está em nenhum canal');
		if (!serverQueue) return msg.channel.send('Selecione um volume de 0 a 100');

		if (!args[1]) return msg.channel.send(`O volume atual é: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		if(parseInt(args[1]) > 5) return msg.channel.send("Escolha o volume entre 1 e 5");
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);


		return msg.channel.send(`O volume agora é: **${args[1]}**`);
	} else if (command === 'np') {
		
		if(msg.channel.id != "402303684429611018") {
			return;
		}

		if (!serverQueue) return msg.channel.send('Não tem nada tocando agora!');

		return msg.channel.send(`Tocando agora: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send('Não tem nada em queue');
		return msg.channel.send(`
__**Queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**?? Tocando agora:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause') {
		
		if(msg.channel.id != "402303684429611018") {
			return;
		}

		if(!msg.member.hasPermission("MANAGE_MESSAGES")) {
			return msg.channel.send("Você não tem permissão para este comando");
		}

		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();

			return msg.channel.send("Pausei a musica!");
		}
		return msg.channel.send('Não tem nenhuma musica para pausar.');
	} else if (command === 'resume') {
		
		if(msg.channel.id != "402303684429611018") {
			return;
		}

		if(!msg.member.hasPermission("MANAGE_MESSAGES")) {
			return msg.channel.send("Você não tem permissão para este comando");
		}

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();


			return msg.channel.send("Voltei a tocar!");
		}
		return msg.channel.send('Não tem nenhuma musica para voltar a tocar.');
	}

	return undefined;
});
 
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Discord.Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`Não consegui entrar no canal: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Não consegui entrar no canal: ${error}`);
		}
	} else {

		serverQueue.songs.push(song);
		if (playlist) return undefined;
		else return msg.channel.send(`A musica **${song.title}** foi adicionada a queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Não está carregando rapido o sufuiciente.') console.log('Acabou a musica.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);


    serverQueue.textChannel.send(`Tocando agora: **${serverQueue.songs[0].title}**`);
}

client.login(process.env.BOT_TOKEN);
