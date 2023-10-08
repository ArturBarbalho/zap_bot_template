const { Client } = require('whatsapp-web.js')
const client = new Client();
const qrcode = require('qrcode-terminal');

client.on('qr', (qr) => {
    const qrcodestirng = qr
    const qrcodepic = qrcode.generate(qr, {small: true}) 
    console.log(qrcodepic)
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
 

//START HERE

//reply
client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});
//normal 
client.on('message', message => {
	if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
}); 