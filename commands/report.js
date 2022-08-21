import { ContextMenuCommandBuilder, ApplicationCommandType } from "discord.js";

export const data = new ContextMenuCommandBuilder()
    .setName('Report')
    .setType(ApplicationCommandType.Message)

export const execute = async (interaction, client) => {
    console.log(interaction);
    interaction.reply({ content: `reported message #${interaction.targetId}`, ephemeral: true });
    const channel = client.channels.cache.get('1010854019733917716');
    channel.send(`reported message #${interaction.targetId}`);
}