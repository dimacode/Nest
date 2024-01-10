import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({ // Decorator
  // Controllers
  controllers: [AppController], // for placing routs - decorator = @Controller
  // Services
  providers: [AppService], // "Service" for placing logick - decorator = @Injectable
})
export class AppModule { }