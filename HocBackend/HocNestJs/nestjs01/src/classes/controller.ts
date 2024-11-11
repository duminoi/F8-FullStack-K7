import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import ClassService from "./service";

@Controller('/classes') // đường dẫn
@ApiTags('classes')
export default class Classes{
    constructor(private classService: ClassService) {
    }
    @Get()
   async getList(){
        const result = await this.classService.handleSelect()
        return result
    }
}
