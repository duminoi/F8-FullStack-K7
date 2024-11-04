import {Module} from '@nestjs/common';
import ExamResultController from "./controller";
@Module({
    controllers: [ExamResultController],
    providers:[]
})
export default class ExamResult {}
