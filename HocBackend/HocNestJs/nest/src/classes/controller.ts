import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import ClassService from "./service";


@Controller('classes')
@ApiTags('classes')
export default class Classes {

    constructor(private classService: ClassService) {}

    @Get()
    async getList1() {
        console.log('getList')
        return await this.classService.getList()
    }
}