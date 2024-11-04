import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";

@Controller('/exams') // đường dẫn
@ApiTags('exams')
export default class Exam{
    @Get()
    getList(){
        console.log("getList")
        return {msg: "exams"}
    }
}
