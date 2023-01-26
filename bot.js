const { Telegraf } = require("telegraf");

const bot = new Telegraf("5900300375:AAEfhfbZS2un47m9Us0_c89r06ghkPT1D8E");
bot.start((ctx) => ctx.reply("Welcome"));
bot.on("message", (ctx) => {
  console.log("ctx.message");
});
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
