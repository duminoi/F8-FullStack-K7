import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { AppService } from './app.service';


class CreateUserDto {
  id: number | null
  name: string
  age: number
  email: string
}


@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers() {
    return this.appService.getList()
    // return this.appService.getHello();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.appService.getOne(id)
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.appService.create(userDto)
  }
}
// localhost:3000/students
// localhost:3000/subjects
// localhost:3000/teachers
// localhost:3000/classes
