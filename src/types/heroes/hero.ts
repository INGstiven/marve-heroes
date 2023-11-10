
export interface Hero {
    id: number;
    name: string;
    description: string;
    resourceURI: string;
    thumbnail: ThumbNail;
    comics?: itemResult;
    series?:itemResult;
}

export interface ThumbNail {
    path: string;
    extension: string;
}

export interface itemResult{
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
    category: string;
}
export interface Item{
    resourceItem: string;
    name: string;
}