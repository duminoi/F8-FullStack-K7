import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";

@Controller('/students') // đường dẫn
@ApiTags('students')
export default class Student{
    @Get()
    getList(){
        console.log("getList")
        return {msg: "students"}
    }
}
