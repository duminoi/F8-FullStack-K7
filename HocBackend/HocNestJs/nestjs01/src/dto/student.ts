import Base from "./base";

abstract class StudentCreate extends Base{
    mail:string
    classes: number[]
}

abstract class StudentUpdate extends StudentCreate{

}

export {StudentUpdate,StudentCreate}