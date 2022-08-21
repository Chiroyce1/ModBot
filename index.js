import fs from "node:fs";
import { stayAlive } from './server.js';
import { REST } from "@discordjs/rest";
import { Client, GatewayIntentBits, Collection, Routes } from "discord.js";
import { config } from 'dotenv';

config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});


const commandFromName = (name, commands) => {
    for (const command of commands) {
        if (command[0] === name) {
            return command;
        }
    }
}

client.on("ready", () => {
    console.log(`[>] Logged in as ${client.user.tag}`)
})

// Read all commands from .js files in the ./commands directory
const staticCommands = [];
const commands = new Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = await import(`./commands/${file}`);
    console.log("[>] Loaded command /" + file.substring(0, file.length - 3));
    staticCommands.push(command.data.toJSON());
    commands.set(command.data.name, command);
}

// If we specify to refresh slash commands
if (process.argv.includes("-r")) {
    const rest = new REST({ version: 10 }).setToken(process.env.TOKEN);
    try {
        console.log("[>] Refreshing application / commands");
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: staticCommands }
        );
        console.log("[>] Bot / commands refreshed successfully");
    } catch (err) {
        console.log(`[!] Error while refreshing / commands: ${err}`);
    };
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand() && !interaction.isUserContextMenuCommand) return;
    const command = commandFromName(interaction.commandName, commands);
    if (!command) return;
    await command[1].execute(interaction, client);
    try {
    }
    catch (err) {
        console.log(`[!] Error while executing command /${interaction.commandName}: ${err}`);
    }
});

stayAlive();
client.login(process.env.TOKEN);