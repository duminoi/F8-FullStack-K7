import {Module} from '@nestjs/common';
import SubjectController from "./controller";
@Module({
    controllers: [SubjectController],
    providers:[]
})
export default class Subject {}
