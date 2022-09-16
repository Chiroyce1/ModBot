import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } from "discord.js";


export const data = new ModalBuilder()
        .setCustomId('apply')
        .setTitle('Apply for Mod');

const timezone = new TextInputBuilder()
        .setCustomId('timezone')
        .setLabel('Timezone')
        .setStyle(TextInputStyle.Short)
        .setPlaceholder('UTC±00:00');

const age = new TextInputBuilder()
        .setCustomId('age')
        .setLabel('Age')
        .setStyle(TextInputStyle.Short)
        .setMaxLength(3);

const activeness = new TextInputBuilder()
        .setCustomId('activeness')
        .setLabel('Activeness')
        .setStyle(TextInputStyle.Short)
        .setMaxLength(2)
        .setPlaceholder('(Out of 10)');

const experience = new TextInputBuilder()
        .setCustomId('experience')
        .setLabel('Experience as a mod')
        .setStyle(TextInputStyle.Short)
        .setMaxLength(2)
        .setPlaceholder('(Out of 10)');

const reason = new TextInputBuilder()
        .setCustomId('reason')
        .setLabel('Reason')
        .setStyle(TextInputStyle.Paragraph)
        .setMinLength(10) //change as per required or remove altogether to accept funny applications
        .setMaxLength(500);

const ActionRow1 = new ActionRowBuilder().addComponents(timezone);
const ActionRow2 = new ActionRowBuilder().addComponents(age);
const ActionRow3 = new ActionRowBuilder().addComponents(activeness);
const ActionRow4 = new ActionRowBuilder().addComponents(experience);
const ActionRow5 = new ActionRowBuilder().addComponents(reason);

data.addComponents(
	ActionRow1,
	ActionRow2,
	ActionRow3,
	ActionRow4,
	ActionRow5,
)
interaction.showModal(data)

// END FILE
/* kept for reference
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
*/
