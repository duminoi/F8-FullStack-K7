// import Base from "../dto/base";
import { ApiProperty } from '@nestjs/swagger';


class StudentCreate {
    @ApiProperty()
    name: string

    @ApiProperty()
    mail: string

    @ApiProperty({ type: [Number] })
    classes: number[]
}

class StudentUpdate extends StudentCreate {}

export {StudentCreate}