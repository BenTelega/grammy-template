import { Composer } from "grammy/mod.ts";

const composer = new Composer();




composer.command("start", async (ctx) => {
  const keyboard = new InlineKeyboard()
    .url("Открыть веб-приложение", "https://t.me/bentelega_bot/portfolio")
    .row() // Перенос на новую строку (если нужно добавить ещё кнопки)
    .text("Просто кнопка", "some_action"); // Пример обычной inline-кнопки

  await ctx.reply("Добро пожаловать! 🚀", {
    reply_markup: keyboard,
  });
});


composer.command('test', async (ctx) => { 
	await ctx.reply("test");
});


export default composer;
