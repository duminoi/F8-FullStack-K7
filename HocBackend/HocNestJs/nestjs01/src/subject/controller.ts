import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";

@Controller('/subjects') // đường dẫn
@ApiTags('subjects')
export default class Subject{
    @Get()
    getList(){
        console.log("getList")
        return {msg: "subjects"}
    }
}
