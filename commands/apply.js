import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
	.setName('apply')
	.setDescription('Apply for a moderator position.')
	.addStringOption(option =>
		option.setName('timezone')
			.setDescription('Please state the timezone you are in')
			.setRequired(true))
	.addStringOption(option =>
		option.setName('age')
			.setDescription('Please enter your age (or approximate age is also enough)')
			.setRequired(true))
	.addStringOption(option =>
		option.setName('activeness')
			.setDescription('How often will you be active on a scale of 1-10?')
			.setRequired(true))
	.addStringOption(option =>
		option.setName('experience')
			.setDescription('Have you had experience moderating a server or online community before?')
			.setRequired(true))
	.addStringOption(option =>
		option.setName('why')
			.setDescription('Why should we pick you as a moderator?')
			.setRequired(true));

export const execute = async (interaction, client) => {
	const channel = client.channels.cache.get(process.env.MOD_CHANNEL);
	const embedDesc = `**Mod application by**: <@${interaction.user.id}>
**Timezone**: ${interaction.options.get("timezone").value}
**Age**: ${interaction.options.get("age").value}
**Activeness**: ${interaction.options.get("activeness").value}
**Experience as a mod**: ${interaction.options.get("experience").value}
**Why?**: ${interaction.options.get("experience").value}`;

	const embed = new EmbedBuilder()
		.setTitle(`Mod Application by ${interaction.user.username}#${interaction.user.discriminator}`)
		.setDescription(embedDesc)
		.setColor(0x4F85E1)
		.setTimestamp();

	channel.send({ embeds: [embed] });
	interaction.reply({ content: `Application successfully sent. Please wait at least 24 hours for it to be processed.`, ephemeral: true });
}
