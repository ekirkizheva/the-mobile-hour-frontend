import { Products } from "../models/product.interface";

export const MOCK_PRODUCTS: Products = {
    1: { 
     brand: 'Samsung',
     label: 'Samsung Galaxy s99',
     imageUrl: 'assets/images/samsung.png',
     colorsAvailable: [
       { tag: 'Red', code:'#CE4E4E'},
       { tag: 'Silver Gray', code: '#898686'},
       { tag: 'Dark Green', code: '#2D3A29'},
       { tag: 'Murasaki', code: '#401548'},
     ],
     capacity: ['128GB', '256GB', '512GB', '1TB'],
     sku: 'SKU-000001',
     stock: 100,
     price: 799.00
    },
    2: { 
     brand: 'Apple',
     label: 'Apple iPhone 100500',
     imageUrl: 'assets/images/iphone.png',
     colorsAvailable: [
       { tag: 'Silver Gray', code: '#898686'},
       { tag: 'Dark Green', code: '#2D3A29'},
     ],
     capacity: ['512GB', '1TB'],
     sku: 'SKU-000002',
     stock: 50,
     price: 1099.00
    },
    3: { 
        brand: 'Apple',
        label: 'Apple iPhone 123',
        imageUrl: 'assets/images/iphone.png',
        colorsAvailable: [
          { tag: 'Silver Gray', code: '#898686'},
          { tag: 'Dark Green', code: '#2D3A29'},
        ],
        capacity: ['512GB', '1TB'],
        sku: 'SKU-000002',
        stock: 50,
        price: 1199.00
       }
       ,
    4: { 
        brand: 'Apple',
        label: 'Apple iPhone 567',
        imageUrl: 'assets/images/iphone.png',
        colorsAvailable: [
          { tag: 'Silver Gray', code: '#898686'},
          { tag: 'Dark Green', code: '#2D3A29'},
        ],
        capacity: ['512GB', '1TB'],
        sku: 'SKU-000002',
        stock: 50,
        price: 1299.00
       },
    5: { 
        brand: 'Samsung',
        label: 'Samsung T100',
        imageUrl: 'assets/images/iphone.png',
        colorsAvailable: [
            { tag: 'Silver Gray', code: '#898686'},
            { tag: 'Dark Green', code: '#2D3A29'},
        ],
        capacity: ['512GB', '1TB'],
        sku: 'SKU-000002',
        stock: 50,
        price: 1499.00
        },
    6: { 
        brand: 'Samsung',
        label: 'Samsung T200',
        imageUrl: 'assets/images/iphone.png',
        colorsAvailable: [
            { tag: 'Silver Gray', code: '#898686'},
            { tag: 'Dark Green', code: '#2D3A29'},
        ],
        capacity: ['512GB', '1TB'],
        sku: 'SKU-000002',
        stock: 50,
        price: 1599.00
        },
    7: { 
        brand: 'Xiaomi',
        label: 'Xiaomi M5',
        imageUrl: 'assets/images/iphone.png',
        colorsAvailable: [
            { tag: 'Silver Gray', code: '#898686'},
            { tag: 'Dark Green', code: '#2D3A29'},
        ],
        capacity: ['512GB', '1TB'],
        sku: 'SKU-000002',
        stock: 50,
        price: 800.00
        },
    8: { 
        brand: 'Xiaomi',
        label: 'Xiaomi R2',
        imageUrl: 'assets/images/iphone.png',
        colorsAvailable: [
            { tag: 'Silver Gray', code: '#898686'},
            { tag: 'Dark Green', code: '#2D3A29'},
        ],
        capacity: ['512GB', '1TB'],
        sku: 'SKU-000002',
        stock: 50,
        price: 650.00
        }
   };