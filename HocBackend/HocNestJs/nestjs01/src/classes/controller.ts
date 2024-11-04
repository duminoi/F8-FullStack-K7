import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";

@Controller('/classes') // đường dẫn
@ApiTags('classes')
export default class Classes{
    @Get()
    getList(){
        return {msg: "classes"}
    }
}
