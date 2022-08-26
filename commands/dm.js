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
	const user = await client.users.fetch(interaction.user.id);
	console.log(user);
	console.log(interaction.options.get("user").value);
	interaction.reply({ content: `ok`, ephemeral: true });
}