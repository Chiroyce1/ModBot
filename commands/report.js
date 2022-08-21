import { ContextMenuCommandBuilder, ApplicationCommandType } from "discord.js";

const MOD_CHANNEL = "1010854019733917716";
const url_format = "https://discord.com/channels/1010852997858852964/{CHANNEL}/{ID}";

export const data = new ContextMenuCommandBuilder()
    .setName('Report')
    .setType(ApplicationCommandType.Message)

export const execute = async (interaction, client) => {
    interaction.reply({ content: `Message successfully reported to moderators.`, ephemeral: true });
    console.log(interaction);
    const channel = client.channels.cache.get(MOD_CHANNEL);
    channel.send(`<@${interaction.user.id}> reported ${url_format.replaceAll("{CHANNEL}", interaction.channelId).replaceAll("{ID}", interaction.targetId)}`);
}