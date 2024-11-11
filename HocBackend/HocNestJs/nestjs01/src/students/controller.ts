import {Body, Controller, Get, Post} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import StudentService from "./service";
import {StudentCreate} from "../dto/student";

@Controller('/students') // đường dẫn
@ApiTags('students')
export default class Student{
    constructor(private  studentService:StudentService) {
    }
    @Get()
    async getList(){
        const result = await this.studentService.getList()
        return result
    }



    @Post()
    async create(@Body() student){
        return await this.studentService.create(student)
    }

}
