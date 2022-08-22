import { ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder } from "discord.js";

const url_format = `https://discord.com/channels/${process.env.GUILD_ID}/{CHANNEL}/{ID}`;

export const data = new ContextMenuCommandBuilder()
    .setName('Report')
    .setType(ApplicationCommandType.Message)

export const execute = async (interaction, client) => {
    const channel = client.channels.cache.get(process.env.MOD_CHANNEL);
    const embedDesc = `**Reporter**: <@${interaction.user.id}>
[**Jump to message**](${url_format.replaceAll("{CHANNEL}", interaction.channelId).replaceAll("{ID}", interaction.targetId)})`

    const embed = new EmbedBuilder()
        .setTitle(`Message reported by ${interaction.user.username}#${interaction.user.discriminator}`)
        .setDescription(embedDesc)
        .setColor(0xFF0000)
        .setTimestamp()

    channel.send({ embeds: [embed] });
    interaction.reply({ content: `Message successfully reported to moderators.`, ephemeral: true });
}