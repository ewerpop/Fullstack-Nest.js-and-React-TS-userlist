export declare class DtoCreate {
    id: number;
    name: string;
    lastName: string;
    age: number;
    height: number;
    place: string;
    weight: number;
    sex: boolean;
}
export declare class DtoValid {
    id: number;
    name: string;
    lastName: string;
    age: number;
    height: number;
    place: string;
    weight: number;
    sex: boolean;
    image: any;
}
export declare class DtoFind {
    id: number;
}
export declare class DtoPagin {
    currentPage: number;
    elementsOnPage: number;
}
