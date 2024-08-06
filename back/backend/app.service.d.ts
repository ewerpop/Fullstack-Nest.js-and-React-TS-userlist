import { DtoCreate, DtoDelete, DtoFind, DtoPagin, DtoValid } from './dto/create.dto';
import { DatabaseService } from './database/database.service';
export declare class AppService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getHello(): string;
    save(dto: DtoValid): Promise<{
        id: number;
        name: string;
        lastName: string;
        age: number;
        height: number;
        place: string;
        weight: number;
        sex: boolean;
        image: string;
    }>;
    delete(dto: DtoDelete): Promise<{
        id: number;
        name: string;
        lastName: string;
        age: number;
        height: number;
        place: string;
        weight: number;
        sex: boolean;
        image: string;
    }>;
    update(dto: DtoCreate): Promise<{
        id: number;
        name: string;
        lastName: string;
        age: number;
        height: number;
        place: string;
        weight: number;
        sex: boolean;
        image: string;
    }>;
    load(): Promise<{
        id: number;
        name: string;
        lastName: string;
        age: number;
        height: number;
        place: string;
        weight: number;
        sex: boolean;
        image: string;
    }[]>;
    select(dto: DtoFind): Promise<{
        id: number;
        name: string;
        lastName: string;
        age: number;
        height: number;
        place: string;
        weight: number;
        sex: boolean;
        image: string;
    }>;
    paginLoad(dto: DtoPagin): Promise<{
        id: number;
        name: string;
        lastName: string;
        age: number;
        height: number;
        place: string;
        weight: number;
        sex: boolean;
        image: string;
    }[]>;
}
