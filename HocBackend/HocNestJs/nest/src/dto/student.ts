import Base from "./base";

class StudentCreate extends Base{
    mail: string
    classes: number[]
}

class StudentUpdate extends StudentCreate {}

export {StudentUpdate, StudentCreate}
