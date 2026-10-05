const TelegramBot = require('node-telegram-bot-api');
const token = 'ТВОЙ_ТОКЕН_ЗДЕСЬ'; // Потом заменим на настоящий
const bot = new TelegramBot(token, { polling: true });

function generatePassword(length = 12) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

bot.onText(/\/password/, (msg) => {
  const chatId = msg.chat.id;
  const pwd = generatePassword();
  bot.sendMessage(chatId, `🔐 Твой пароль:\n\`${pwd}\``, { parse_mode: 'Markdown' });
});

console.log('Бот запущен...');
