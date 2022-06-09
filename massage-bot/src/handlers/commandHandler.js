const { InlineKeyboard } = require('C:\\Users\\Пользователь\\Desktop\\Учеба\\PU TgBot\\massage-bot\\buttons')

module.exports.CommandHandler = (bot) => {
  bot.start(async (ctx) => {
    await ctx.replyWithHTML('Привет, мы делаем шикарный массаж. Познакомиться с нами можно тут 👇', InlineKeyboard.buttons_start2())
  })

}