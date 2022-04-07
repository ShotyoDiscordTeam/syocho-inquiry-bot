const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`起動しました`);
});

client.on("message", async message => {
  if (message.author.bot) return;
  const messages = await message.guild.channels.cache.get('961206059199000579')

  const embed = new Discord.MessageEmbed()
      .setTitle("" + '匿名システム')
      .addField("送信した内容:", message.content)
  client.channels.cache.get('961457265574047784').send(embed)
  
})

client.on("message", async message => {
  if (message.author.bot) return;
  const messages = await message.guild.channels.cache.get('961457265574047784')

  const embed1 = new Discord.MessageEmbed()
      .setTitle("ユーザー: " + message.author.tag)
      .addField("送信した内容:", message.content)
  client.channels.cache.get('961206059199000579').send(embed1)
  
})

const config = require("./config.json");
client.login(config.token);

//created by mono0218