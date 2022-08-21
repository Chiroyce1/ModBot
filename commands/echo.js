import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    .addStringOption(option =>
        option.setName('input')
            .setDescription('The input to echo back')
            .setRequired(true));

export const execute = async (interaction, client) => {
    interaction.reply({ content: interaction.options.get("input").value });
}