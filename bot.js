import bot from '../../telegramBot';

export default function handler(req, res) {
    res.status(200).json({ message: 'Bot is running' });
}
