import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";

@Injectable()
export default abstract class BaseService {
    // constructor(private prisma: PrismaService) {}
    protected prisma = new PrismaService()
    private name: string

    protected constructor(name) {
        this.name = name
    }

    handleSelect() {
        return {
            id: true,
            name: true
        }
    }

    handleFind() {
        return {
            active: true
        }
    }

    mappingOut(data) {
        return data
    }

    async getList() {
        const result = await this.prisma[this.name].findMany({
            relationLoadStrategy: 'query',
            select: this.handleSelect(),
            where: this.handleFind()
        })

        return result
    }

    create(data) {
        console.log(data)
    }

    updateOne(id: number, data: Object) {
        return this.prisma[this.name].update({
            where: { id },
            data
        })
    }

    softDelete(id: number) {
        return this.prisma[this.name].update({
            where: { id },
            data: { active: false }
        })
    }
}