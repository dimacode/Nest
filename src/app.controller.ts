import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('/api') // will work on this path "/api"
export class AppController {

  constructor(private appService: AppService) { // connect necessary Services for this controller

  }

  @Get('/users') // full path is "/api/users"
  getUsers() {
    // return [{ id: 1, name: 'Uilbi TV' }]
    return this.appService.getUsers();
  }
}