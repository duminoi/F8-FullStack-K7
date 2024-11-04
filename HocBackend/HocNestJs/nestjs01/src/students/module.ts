import {Module} from '@nestjs/common';
import StudentsController from "./controller";
@Module({
    controllers: [StudentsController],
    providers:[]
})
export default class Students {}
