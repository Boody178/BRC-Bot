const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows the help section')
		,
	async execute(interaction) {
		interaction.reply(`https://embedl.ink/e/k02fnh3z`);
},
};