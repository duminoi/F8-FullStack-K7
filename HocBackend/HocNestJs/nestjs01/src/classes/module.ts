import {Module} from '@nestjs/common';
import ClassesController from './controller'
import ClassService from "./service";
import {PrismaService} from "../prisma.service";
@Module({
    controllers: [ClassesController],
    providers:[ClassService,PrismaService]
})
export default class Classes{}
