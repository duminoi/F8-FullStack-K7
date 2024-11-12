import {Module} from "@nestjs/common";
import Controller from './controller'
import ClassService from "./service";
import {PrismaService} from "../prisma.service";


@Module({
    controllers: [Controller],
    providers: [ClassService, PrismaService]
})
export default class Classes {}
