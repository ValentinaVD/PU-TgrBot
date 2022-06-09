const Telegraf = require('telegraf')
const { Markup } = Telegraf

module.exports.InlineKeyboard = {
  buttons_start: () => {
    return Markup.inlineKeyboard([
      [Markup.button.callback('Список RSS', 'listRss')],
      [Markup.button.webApp('WebApp', 'https://d8b1-212-164-38-153.eu.ngrok.io')]
    ])
  },
  buttons_start2: () => {
    return Markup.keyboard([
      [Markup.button.callback('Записаться', 'Booking')],
      [Markup.button.webApp('WebApp', 'https://d8b1-212-164-38-153.eu.ngrok.io')]
    ])
  },
  buttons_source: () => {
    return Markup.inlineKeyboard([
      [Markup.button.callback('Reddit', 'redditRss')]
    ])
  },
  buttons_back: () => {
    return Markup.inlineKeyboard([
      [Markup.button.callback('Назад', 'back')]
    ])
  },
  buttons_masters: () => {
    return Markup.inlineKeyboard([
      [Markup.button.callback('Татьяна', 'tatyana'), Markup.button.callback('Наталья', 'natalya')],
      [Markup.button.callback('Лиза', 'lisa'), Markup.button.callback('Макар', 'makar')]
    ])
  },
}
