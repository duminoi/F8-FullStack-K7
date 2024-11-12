import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ClassesModule from './classes/module'
import StudentModule from './students/module'

@Module({
  imports: [ClassesModule, StudentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
