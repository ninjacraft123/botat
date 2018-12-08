const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "L";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'هنا') {
    msg.reply('ماستر الملك');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Lhelp`,"https://www.twitch.tv/dggamingbot")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي', `Welcome to the server ${member}`)
        .addField('User ID :', `"[" + ${member.id} + "]"` )
                .addField(':arrow_down:',`** انت العضو رقم ${member.guild.memberCount}**`)

                  .addField("Name:",`**<@${member.id}>**`, true)

                                     .addField(' الـسيرفر', `${member.guild.name}`,true)

     .setFooter('Server To Legends')
        .setTimestamp()

      channel.sendEmbed(embed);
});

client.on('message', message => { // هاذا للبرودكسات
        var prefix = 'L'; // هنا تقدر تغير البرفكس
	var command = message.content.split(" ")[0];
	if(command == prefix + 'bc') { // الكوماند !bc
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don`t have **MANAGE_MESSAGES** permission!");
		var args = message.content.split(' ').slice
	    
client.login(process.env.BOT_TOKEN);
