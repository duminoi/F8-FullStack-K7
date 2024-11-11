import {Injectable} from "@nestjs/common";
import {Prisma, Member} from "@prisma/client";
import {PrismaService} from "../prisma.service";
import BaseService from "../base/service";

@Injectable()
export default class StudentService extends BaseService{
    constructor() {
     super("member")
    }

    handleSelect(){
        const field = super.handleSelect()
        return {
            ...field,
            mail: true,
            classes: true
        }
    }

    protected handleFind(): { active: boolean,role:string } {
        return {
            active: true,
            role: 'student'
        }
    }
    async create(student){
        const classIds = student.classes
        delete student.classes
        // const newStudent = await this.prisma.member.create({
        //     data: {...student, role: 'student', password:'12345678'}
        //
        // })
        // classIds.forEach(async (classIds:number){
        //     await this.prisma.classMember.create({
        //         data:{
        //             memberId: newStudent.id,
        //             classId: classId
        //         }
        //     })
        // })
        // console.log("newStudent",newStudent)

        const newStu =  await this.prisma.member.create({
            data:{
                ...student,
                role: 'student',
                password:'12345678',
                classes:{
                    createMany:{
                        data: classIds.map((classId:number)=>{
                            return { classId}
                        })
                    }
                }
            }
        })

        console.log("newStu",newStu)

    }


    async getList(){
        return super.getList()
    }

    // async getList(){
    //     return this.prisma.member.findMany(
    //         {
    //             select:{
    //                 id: true,
    //                 name:true,
    //                 mail: true
    //             },
    //             where:{
    //                 id: 1
    //             },
    //             orderBy:[
    //                 {
    //                     id: 'asc'
    //                 }
    //             ]
    //         }
    //     )
    // }
}