import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";

@Controller('/examresult') // đường dẫn
@ApiTags('examresult')
export default class ExamResult{
    @Get()
    getList(){
        console.log("getList")
        return {msg: "examresult"}
    }
}
