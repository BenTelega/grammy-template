import { Composer } from "grammy/mod.ts";

const composer = new Composer();




composer.command("start", async (ctx) => {
  await ctx.reply("Пр");
});



composer.command('test', async (ctx) => { 
	await ctx.reply("test");
});


export default composer;
