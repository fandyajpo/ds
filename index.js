require("dotenv").config(".env");

const {
  Client,
  Events,
  GatewayIntentBits,
  EmbedBuilder,
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
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

client.on("guildMemberAdd", async (member) => {
  const channelId = "802185552505208832";
  if (member.guild.id === "772427404769493032") {
    const embed = new EmbedBuilder()
      .setTitle("Welcome")
      .setDescription("Welcome to DS SERVER and enjoy your stay!")
      .setThumbnail(member.user.avatarURL({ forceStatic: true }))
      .setImage(
        "https://cdn.discordapp.com/attachments/1124350568182317056/1135915965654257714/959CCDA7-1950-4B4C-8B92-076E2B0D3DFE_1.png"
      )
      .setTimestamp();

    try {
      const channel = await member.guild.channels.fetch(channelId);
      await channel.send({ content: `<@${member.user.id}>`, embeds: [embed] });
    } catch (error) {
      console.error("Error fetching channel:", error);
    }
  }
});

client.login(process.env.DISCORD_SECRET);
