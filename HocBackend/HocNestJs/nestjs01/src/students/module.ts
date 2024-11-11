import {Module} from '@nestjs/common';
import StudentsController from "./controller";
import StudentService from "./service";
import {PrismaService} from "../prisma.service";
@Module({
    controllers: [StudentsController],
    providers:[StudentService,PrismaService]
})
export default class Students {}
