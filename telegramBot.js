// telegramBot.js
const TelegramBot = require('node-telegram-bot-api');

const token = '6934891076:AAH3AnUR-_g7XAuFraqus2rPXUIFHhdmXUw';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! How can I help you?', {
        reply_markup: {
            keyboard: [['Option 1', 'Option 2']],
            one_time_keyboard: true,
        },
    });

    bot.onText(/\/hide/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Keyboard hidden', {
            reply_markup: {
                remove_keyboard: true,
            },
        });
    });

});

module.exports = bot;
