# ModBot

A Discord bot for moderation.

[![Run on Repl.it](https://replit.com/badge/github/Chiroyce1/ModBot)](https://replit.com/new/github/Chiroyce1/ModBot)

 
## To use:
1. Clone this repository (or click "Run on Replit" to host it in the cloud for free)
2. Create a new [Discord Application](https://discord.com/developers/applications), and make sure it is a bot. Reset its token and save it somewhere safe. If you aren't sure how to do this, follow the [official discord.js guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot). Then [add it to your server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)
3. Create a `.env` file with the following variables
> **⚠️ NOTE**: If you're running this on Replit, you have to use [**Secrets and environment variables**](https://docs.replit.com/programming-ide/storing-sensitive-information-environment-variables) instead of a `.env` file.
```env
TOKEN=
GUILD_ID=
CLIENT_ID=
MOD_CHANNEL=
```
Where the `GUILD_ID` is the ID of the server you want the bot in, `CLIENT_ID` is the ID of your Discord Bot, `MOD_CHANNEL` is the ID of the channel you want the reports to be sent to.


Then run `npm run start` (or `node . -r`, or press then run button on Replit) to run the bot. You should see it online on the server

<img width="165" alt="image" src="https://user-images.githubusercontent.com/97374054/186346160-4b1d0ea3-604f-4d08-93d8-8415d00288d7.png">
<br><br>

4. Now, right click any message and go to the `Apps` section in the context menu, you should see a new app called "Report", click that to report the message to the following channel (as specified in the env variables)

You should now see a message in the moderation channel.

> **Tip**: Make sure the moderation channel is only visible to select members of your server that are "moderating" it.
