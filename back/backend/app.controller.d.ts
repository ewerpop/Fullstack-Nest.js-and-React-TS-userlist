import { AppService } from './app.service';
import { DtoFind, DtoPagin, DtoValid, DtoCreate } from './dto/create.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    count(): Promise<number>;
    get(dto: DtoPagin): Promise<{
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
    create(dto: DtoCreate, image: any): Promise<{
        id: number;
        image: string;
    }>;
    delete(dto: DtoFind): Promise<{
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
    update(dto: DtoValid): Promise<{
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
}
