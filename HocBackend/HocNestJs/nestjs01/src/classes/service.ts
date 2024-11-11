import {Injectable} from "@nestjs/common";
import {Prisma, Member} from "@prisma/client";
import {PrismaService} from "../prisma.service";
import BaseService from "../base/service";

@Injectable()
export default class ClassService extends BaseService{
    constructor() {
        super("class")
    }
    handleSelect(){
        const field = super.handleSelect()
        return {
            ...field,
            members:{
                select:{
                    member:{
                        select:{
                            id:true,
                            name:true
                        }
                    }
                }
            }
        }
    }

    mappingData(data): any {
        return data
    }

    protected handleFind(): { active: boolean} {
        return {
            active: true
        }
    }


    // async getList(){
    //     return this.prisma.class.findMany(
    //         {
    //             select:{
    //                 id: true,
    //                 name:true,
    //                 schedule: true
    //             },
    //             where:{
    //                 active: true
    //             }
    //         }
    //     )
    // }
}