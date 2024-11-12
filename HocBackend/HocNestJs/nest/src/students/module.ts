import {Module} from "@nestjs/common";
import Controller from './controller'
import StudentService from "./service";
import {PrismaService} from "../prisma.service";


@Module({
    controllers: [Controller],
    providers: [StudentService, PrismaService]
})
export default class Student {}
