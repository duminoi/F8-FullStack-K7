import {Body, Controller, Get, Param, Post,} from '@nestjs/common';
import { AppService } from './app.service';

class CreateUserDto{
  id: number | null;
  name:string;
  age: number;
}

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
  // appService:AppService = new AppService(); ( trong trường hợp không có provider)

  @Get()
  getHello() {
    return this.appService.getList()
  }
  @Get(":id")
  getUsersById(@Param('id') id:number ){
    return  this.appService.getOne(id)
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto){
    return this.appService.create(userDto)
  }
}
