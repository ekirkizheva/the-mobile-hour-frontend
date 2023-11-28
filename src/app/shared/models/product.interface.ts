export interface Products {
    [key: number]: Product;
}

export interface Product { 
        brand: string;
        label: string;
        imageUrl: string;
        colorsAvailable: {
            tag: string;
            code: string;
        }[];
        capacity: string[]
        sku: string;
        stock: number;
        price: number;
}