import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma.service";
import BaseService from "../base/service";

@Injectable()
export default class ClassService extends BaseService{

    constructor() {
        super('class')
    }

    handleSelect() {
        const field = super.handleSelect();
        return {
            ...field,
            members: {
                select: {
                    member: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
        }
    }

    mappingOut(data) {
        return data
    }
}