import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import ClassesModule from "./classes/module";
import StudentModule from "./students/module";
import AttendanceModule from "./attendance/module"
import SubjectModule from "./subject/module"
import ExamModule from "./exams/module"
import ExamResultModule from "./examresult/module"

@Module({
  imports: [ClassesModule,StudentModule,AttendanceModule,SubjectModule,ExamModule,ExamResultModule],
  providers: [AppService],
})
export class AppModule {}
