var Discord = require("discord.js");
var Client = new Discord.Client();
var rand = ['how are you?','#clear','huh..?', 'uhh nope.', 'Yeah?', 'ك-ك', ';-;', 'how are you?', 'huh..?', 'uhh nope.', 'Yeah?','how are you?', 'huh..?', 'uhh nope.', 'Yeah?','#clear '];
var text_ = ['15:70', '25:68', '48:49', '84:87', '85:47', '54:65']
var login_ = text_[Math.floor(Math.random()*text_.length)];

Client.on('ready', () => {
     setInterval(() => {
       var index2 = ['830424831367184404','680671240746434580','890516253758877707']
       var index = rand[Math.floor(Math.random()*rand.length)];
       var index3 = index2[Math.floor(Math.random()*index2.length)];
       var channel = Client.channels.get( index3 )
       channel.send(index)
       .catch(console.error);
     }, 9549);
});

Client.login(process.amv.BOT_TOKEN);
