import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    // constructor() {
    //     super({
    //         log: ['query', 'info', 'warn', 'error'], // This will log all queries
    //     });
    // }
    async onModuleInit() {
        await this.$connect();
    }
}
