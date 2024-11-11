import {Injectable} from "@nestjs/common";
import {Prisma} from "@prisma/client";
import {PrismaService} from "../prisma.service";

@Injectable()
export default class BaseService{
    protected prisma = new PrismaService()
    private name:string

    protected constructor(name: string) {
        this.name = name
    }

    protected handleSelect(){
        return {
            id: true,
            name:true,
        }
    }
    protected handleFind(){
        return {
            active: true
        }
    }
    mappingData(data){
        return data
    }

    create(data){
        console.log(data)
    }


    updateOne(id:number, data:Object){
        return this.prisma[this.name].update({
            where: {id},
            data
        })
    }
    softDelete(id:number){
        return this.prisma[this.name].update({
            where: {id},
            data: { active: false}
        })
    }

    async getList(){
        return this.prisma[this.name].findMany(
            {
                select:this.handleSelect(),
                where:this.handleFind()
            }
        )
    }
}