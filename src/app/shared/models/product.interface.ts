import { Feature } from "./feature.interface";

export interface Products {
    [key: number]: Product;
}

export interface Product { 
    id: number;
    product_name: string;
    product_model: string;
    manufacturer: string;
    price: number;
    stock_on_hand: number;
    features: Feature[];



        // brand: string;
        // label: string;
        // imageUrl: string;
        // colorsAvailable: {
        //     tag: string;
        //     code: string;
        // }[];
        // capacity: string[]
        // sku: string;
        // stock: number;
        // price: number;
}