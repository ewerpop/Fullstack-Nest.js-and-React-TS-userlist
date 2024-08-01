import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

function throwError(message: string): never {
    throw new Error(message);
}

@Injectable()
export class DatabaseService extends PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect()
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on(throwError('Invalid event name'), async () => {
            await app.close()
        })
    }
}
