import {Injectable} from "@nestjs/common";
import BaseService from "../base/service";

@Injectable()
export default class StudentService extends BaseService{

    constructor() {
        super('member')
    }

    handleSelect() {
        const field = super.handleSelect()
        return {
            ...field,
            mail: true,
            classes: {
                select: {
                    classId: true,
                    class: {
                        select: {
                            id: true,
                            name: true,
                            schedule: true
                        }
                    }
                }
            }
        }
    }

    handleFind() {
        return {
            active: true,
            role: 'student'
        }
    }

    async create(student) {
        const classIds = student.classes
        delete student.classes
        // const newStu = await this.prisma.member.create({
        //     data: {...student, role: 'student', password: '12345678'}
        // })
        //
        // const classMembers = classIds.map((classId: number) => {
        //     return {
        //         classId,
        //         memberId: newStu.id
        //     }
        // })
        // await this.prisma.classMember.createMany({
        //     data: classMembers
        // })
        //
        // console.log(newStu)
        const newStu = await this.prisma.member.create({
            data: {
                ...student,
                role: 'student',
                password: '12345678',
                classes: {
                    createMany: {
                        data: classIds.map((classId: number) => ({ classId }))
                    }
                }
            }
        })
        console.log(newStu)
    }

    // async getList() {
    //     const result = await this.prisma.member.findMany({
    //         select: {
    //             id: true,
    //             name: true,
    //             mail: true
    //         },
    //         where: {
    //             active: true
    //         }
    //     })
    //
    //     return result
    // }

}