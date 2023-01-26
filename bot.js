const { Telegraf } = require("telegraf");
const axios = require("axios");

const bot = new Telegraf("5900300375:AAEfhfbZS2un47m9Us0_c89r06ghkPT1D8E");
bot.start((ctx) => ctx.reply("Welcome"));
bot.on("message", async (ctx) => {
  if (ctx.message.location) {
    console.log(ctx.message.location);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&appid=cf8b5f06685b88f05cee668cec61e243`;
    const response = await axios.get(url);
    console.log(response);
    ctx.reply(`${response.data.name}: ${response.data.main.temp} C`);
  }
});
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
