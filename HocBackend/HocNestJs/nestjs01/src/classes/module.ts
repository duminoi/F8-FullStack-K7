import {Module} from '@nestjs/common';
import ClassesController from './controller'
@Module({
    controllers: [ClassesController],
    providers:[]
})
export default class Classes{}
