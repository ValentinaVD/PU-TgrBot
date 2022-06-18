const { Scenes } = require('telegraf')
const {BaseScene } = Scenes

const messages = require('../messages.json')
const { InlineKeyboard } = require('../buttons')

module.exports.Appointment = () => {
    const appointment = new BaseScene('appointment')
  
    appointment.enter(async (ctx) => {
      await ctx.replyWithHTML(messages.startAppointment, InlineKeyboard.startAppointment())
    })
    
    appointment.on('callback_query', async (ctx) => {
        const { callbackQuery, session } = ctx
    
        if (callbackQuery.data === 'start_appointment') {
          console.log(`[x] Appoint работает: ${callbackQuery.message.chat.first_name} (${callbackQuery.message.chat.id} - ${callbackQuery.message.chat.username})`)
    
          session.questionNumber = 1
          session.answers = []
    
          await ctx.editMessageReplyMarkup()
          await ctx.replyWithHTML(messages.Question1)
        }
        if (callbackQuery.data === 'back') {
            await ctx.scene.leave()
          }
    })
    return appointment
}