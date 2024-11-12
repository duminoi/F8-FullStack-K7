import {Body, Controller, Get, Post} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import StudentService from "./service";
import {StudentCreate} from './dto'

@Controller('students')
@ApiTags('Student')
export default class Student {

    constructor(private studentService: StudentService) {}

    @Get()
    async getList() {
        return await this.studentService.getList()
    }

    @Post()
    async create(@Body() student: StudentCreate) {
        return await this.studentService.create(student)
    }
}