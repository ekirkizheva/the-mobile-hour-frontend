import { Product } from "./product.interface";

export interface ChangeLog {
    id: number;
    date_created: Date;
    date_last_modified: Date;
    product: Product
}