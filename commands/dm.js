import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
	.setName('dm')
	.setDescription('DM a user (only works for MODS)')
	.addUserOption(option =>
		option.setName('user')
			.setDescription('The user to DM')
			.setRequired(true))
	.addStringOption(option =>
		option.setName('message')
			.setDescription('The message to send to the user')
			.setRequired(true));

export const execute = async (interaction, client) => {
	const message = interaction.options.get("message").value;
	const id = interaction.options.get("user").user.id;

	if (!interaction.member._roles.includes(process.env.MOD_ROLE_ID)) {
		interaction.reply({ content: `You do not have permission to send this message`, ephemeral: true });
		const channel = client.channels.cache.get(process.env.MOD_CHANNEL);
		channel.send(`<@${interaction.member.user.id}> tried to send \n> ${message}\n to <@${id}> without enough permissions.`)
		return;
	}

	const user = client.users.cache.get(id);
	await user.send(message);
	interaction.reply({ content: `Message successfully sent!`, ephemeral: true });
}