const {

	forwardOrBroadCast,	

	bot,

	

	parsedJid,

	

	getBuffer,

	

} = require('../lib/')

bot(

	{

		pattern: 'heck ?(.*)',

		

		fromMe: true,

		

		desc: 'nothing',

		

		type: 'misc',

		

	},async (message, match) => {

    await message.sendMessage('```Injecting malware ```')

     const loading = '```Injecting malware \n'

    for(let i=0;i<11;i++){

      await message.sendMessage(loading + ('█ '.repeat(i))+ i * 10 + '%```')

    }

    await message.sendMessage('```System hyjacking on process \n Cenecting to Server  \n error to find 404 ```')

  await message.sendMessage('```Divice successfully connected... \n Riciving data ```')

const Loading = '```Reciving data \n'

for(let i=0;i<11;i++){

      await message.sendMessage(Loading + ('█ '.repeat(i))+ i * 10 + '%```')

    }

  await message.sendMessage('```Data hyjacked from divice 100% completed \n killing all evidence \killing all malwares ```')

  

    await message.sendMessage('```Hacking Complete```')

  

    await message.sendMessage('*Sending LOG Documents* ');

    var url = await axios.get(`https://i.imgur.com/jTwY3xM.jpeg`, { responseType: 'arraybuffer' })

    await message.sendMessage('https://www.mediafire.com/file/zn2nua795y5l2lj/data.zip/file')

    })
