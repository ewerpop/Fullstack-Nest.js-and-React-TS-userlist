import {IsBoolean, IsInt, IsString, Max, Min} from 'class-validator'

export class DtoCreate {
    @IsInt()
    @Min(0)
    id: number;

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsInt()
    @Min(1)
    @Max(120)
    age: number;

    @IsInt()
    @Min(1)
    @Max(250)
    height: number;

    @IsString()
    place: string;

    @IsInt()
    @Min(1)
    weight: number;

    @IsBoolean()
    sex: boolean;

    @IsString()
    imageName: string
}
export class DtoValid {
    @IsInt()
    @Min(0)
    id: number;

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsInt()
    @Min(1)
    @Max(120)
    age: number;

    @IsInt()
    @Min(1)
    @Max(250)
    height: number;

    @IsString()
    place: string;

    @IsInt()
    @Min(1)
    weight: number;

    @IsBoolean()
    sex: boolean;

    image: any;

    @IsString()
    imageName: string
}

export class DtoFind {
    @IsInt()
    @Min(0)
    id: number
}

export class DtoDelete {
    @IsInt()
    @Min(0)
    id: number

    @IsString()
    image: string
}

export class DtoPagin {
    @IsInt()
    currentPage: number;

    @IsInt()
    elementsOnPage: number
}
