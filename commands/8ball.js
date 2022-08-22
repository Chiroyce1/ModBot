import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName('eight-ball')
    .setDescription('Ask the magic eight ball a question')
    .addStringOption(option =>
        option.setName('question')
            .setDescription('The question to ask the 8ball')
            .setRequired(true));

export const execute = async (interaction, client) => {
    const responses = [
        // Positive responses
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',

        // Negative responses
        'As I see it, no',
        'Don\'t count on it',
        'My reply is no',
        'Very doubtful',
        'Outlook not so good',

        // Neutral responses
        'Reply hazy, try again',
        'Ask again later',
        'Better not tell you now',
        'Concentrate and ask again',
        'I\'m not sure'

    ];

    const question = interaction.options.get("question").value;
    const random = Math.floor(Math.random() * responses.length);
    await interaction.reply(`> *${question}*\n\n:8ball: ${responses[random]}`)
}