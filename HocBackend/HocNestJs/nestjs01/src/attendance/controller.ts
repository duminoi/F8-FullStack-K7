import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";

@Controller('/attendance') // đường dẫn
@ApiTags('attendance')
export default class Attendance{
    @Get()
    getList(){
        console.log("getList")
        return {msg: "attendance"}
    }
}
