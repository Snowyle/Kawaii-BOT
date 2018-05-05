
const Discord = require('discord.js')

const bot = new Discord.Client()

const weather = require('weather-js')

const prefix = "~";







bot.on('ready', function () {
    console.log("Je suis connecté !")
  })

  bot.login('NDM5NzgwNTA1NzIyOTQ1NTQ2.DccXjQ.qvw6PyNsufqN1z9XzlodGWBjyA8')


bot.on("message", message => {



  if(message.content === "!Pantazium") { 
    message.reply("IP de Pantazium : pantazium.minesr.com:25572")
    console.log("Le bot Pantazium");
  }
  if(message.content === "!ping") {
      message.reply("pong")
      console.log("le BOT dit pong")
  }
      if(message.content === "Bonjour"){
       message.reply("Salut comment tu vas")
       console.log("le BOT repond salut comment tu vas")
      }
       if(message.content === "Time"){
       message.reply("https://www.google.fr/search?source=hp&ei=i6_lWsmPMZTmgAbMiLnQAw&q=heure&oq=heure&gs_l=psy-ab.3..0j0i131k1j0j0i131k1j0l6.870.1380.0.1620.6.4.0.1.1.0.74.210.3.3.0....0...1c.1.64.psy-ab..2.4.212.0..35i39k1.0.AxWhW-nLcOs")
       console.log("le BOT Donne l'heure")
    }
       if(message.content === "Ca va et toi ?"){
       message.reply("Oui tres bien !")
       console.log("le BOT Son humeur")
       }
       if(message.content === "Fortnite ?") { 
       message.reply("Achète toi une vie :/")
      console.log("Le bot Fortnite");
  }
      if(message.content === "Fortnite ?") { 
       message.reply("Mec achète toi une vie :/")
       console.log("Le bot Fortnite");
  }
  
       if(message.content === "Qui pour du Fortnite ?") { 
        message.reply("Mec achète toi une vie :/")
        console.log("Le bot Fortnite");
  }
  
       if(message.content === "!cats") { 
        message.reply("Miaou")
        console.log("Le bot miaule");
  }
   
        if(message.content === "!panda") { 
         message.reply("LIEN")
          console.log("Le bot Panda");
  }
        if(message.content === "!Licorne"){
          message.reply("http://image.noelshack.com/fichiers/2018/18/2/1525167071-licone-fuze.png")
         console.log("le BOT Licorne")
        }
        if(message.content === "!Empeureur"){
          message.reply("Oui qu'est ce donc esclave")
          console.log("le BOT Empereur")}
});


bot.on('message', message => {
  if(message.content === "/help")
  var help_embed = new Discord.RichEmbed()
  .setColor("#00FFFF")
  .setTitle("Commandes du Kawaii BOT 🌈🌈 🤖 🤣🤣 \n")
  .setDescription("Je suis un BOT voici mes differentes commandes !")
  .addField("/help", "Pour afficher les commandes d'aides !")
  .addField("Bonjour ; Ca va ?", "Il te repondra !")
  .addField("!rage et !snow", "Ce delire pars dans l'espace")
  .addField("!Pantazium", "Te donne l'IP de Pantazium")
  .addField("Fortnite ? ; Qui pour du Fortnite ?", "Mec achete toi une vie ... :joy:")
  .addField("!cats et !Panda !Licorne" , "En developpement")
  .addField("!Empeureur", "Esclave ???")
  .setThumbnail(message.author.avatarURL)
  .setFooter("Voila bon ammusement 🤣🤣🤣" )
  message.channel.send(help_embed)
}
)


bot.on('message', message => {
  if(message.content === "!Sondage") {
     let args = message.content.split(" ").slice(1);
     let thingToEcho = args.join(" ")
     let embed = new Discord.RichEmbed()
      .setDescription("Sondage de")
      .addField(thingToEcho + "Repondre avec la")
      .setColor("0xB40404")
    message.reply(embed)
    .then(function (message) {
     message.react("✔")
     message.react("❌")

  })}});

  bot.on("ready", () => {
  console.log("je suis pret !")
  bot.user.setActivity("Faire des trucs Kawaii")});
