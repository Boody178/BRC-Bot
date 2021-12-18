const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('game')
		.setDescription('Shows game info')
		,
	async execute(interaction) {
		interaction.reply(`https://embedl.ink/e/7prukn5a`);
},
};