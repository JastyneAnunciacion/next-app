const TelegramBot = require('node-telegram-bot-api');

const token = '6934891076:AAH3AnUR-_g7XAuFraqus2rPXUIFHhdmXUw';

const bot = new TelegramBot(token, { polling: true });

console.log('Bot is starting...');

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    console.log(`/start command received from chat id: ${chatId}`);

    bot.sendMessage(chatId, 'Welcome! Click the button below to open the WebApp.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Open WebApp', web_app: { url: webAppUrl } }]
            ]
        }
    }).then(() => {
        console.log('WebApp button sent to chat id:', chatId);
    }).catch((error) => {
        console.error('Error sending WebApp button:', error);
    });
});

bot.on('message', (msg) => {
    if (msg.web_app_data) {
        const data = msg.web_app_data.data;
        console.log('WebApp data received:', data);

        bot.sendMessage(msg.chat.id, `Received data from WebApp: ${data}`).catch((error) => {
            console.error('Error sending response to WebApp data:', error);
        });
    }
});

bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
});

bot.on('webhook_error', (error) => {
    console.error('Webhook error:', error);
});

bot.on('error', (error) => {
    console.error('General bot error:', error);
});