const { Client } = require('discord.js')
const bot = new Client({
    disableEveryone: true
})
const config = require('./config.json')


bot.login(config.token)