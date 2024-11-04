import {Module} from '@nestjs/common';
import ExamController from "./controller";
@Module({
    controllers: [ExamController],
    providers:[]
})
export default class Exam {}
