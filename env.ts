import { config } from "dotenv";
import { cleanEnv, str } from "envalid";

await config({ export: true });

export default cleanEnv(Deno.env.toObject(), {
  BOT_TOKEN: str(),
  WEBHOOK_PATH: str(), // eg: CloneBot (the webhook would point to <your-domain>/CloneBot)
});
