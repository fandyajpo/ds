require("dotenv").config(".env");

const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content.toLocaleLowerCase() === "pagi") {
    return message.reply("pagi juga kesayangan mom");
  }
  if (message.content.toLocaleLowerCase() === "sore") {
    return message.reply("sore my love");
  }
  if (message.content.toLocaleLowerCase() === "malam") {
    return message.reply("malam juge cinta");
  }
  if (message.content.toLocaleLowerCase() === "siang") {
    return message.reply("tidur berdua yuk");
  }
});

client.login(process.env.DISCORD_SECRET);
