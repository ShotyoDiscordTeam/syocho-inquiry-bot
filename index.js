const Discord = require("discord.js");
const {channelid1, channelid2, token,} = require("./config.json");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`起動しました`);
});

client.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.id === channelid1){
  const embed = new Discord.MessageEmbed()
      .setTitle("" + '匿名システム')
      .addField("送信した内容:", message.content)
  client.channels.cache.get(channelid2).send(embed)
  }

})

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.id === channelid2){

  const embed1 = new Discord.MessageEmbed()
      .setTitle("ユーザー: " + message.author.tag)
      .addField("送信した内容:", message.content)
  client.channels.cache.get(channelid1).send(embed1)
  }
})


client.login(token);

//created by mono0218