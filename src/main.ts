import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 5000; // try to take PORT from .env file, and if it's dosn't exist we use 5000
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => console.log(`Server works fine = ${PORT}`)); // async function
}

start();