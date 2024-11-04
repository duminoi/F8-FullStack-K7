import {Module} from '@nestjs/common';
import AttendanceController from "./controller";
@Module({
    controllers: [AttendanceController],
    providers:[]
})
export default class Attendance {}
