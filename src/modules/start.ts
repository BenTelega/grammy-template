import { Composer } from "grammy/mod.ts";

const composer = new Composer();

composer.command("start", async (ctx) => {
  await ctx.reply("Привет");
});

export default composer;
