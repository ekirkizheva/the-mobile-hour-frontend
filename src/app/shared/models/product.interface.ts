export interface Products {
    [key: number]: Product;
}

export interface Product { 
        label: string;
        imageUrl: string;
        colorsAvailable: {
            tag: string;
            code: string;
        }[];
        capacity: string[]
        sku: string;
        stock: number;
}