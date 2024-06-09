// products.js
import Product1Headphone from "@/../../public/Product1Headphone.svg"
import Product2Headphone from "@/../../public/Product2Headphone.svg"
import Product3Headphone from "@/../../public/Product3Headphone.svg"


const products = [
    {
        id: '1',
        imgProduct: Product1Headphone,
        title: 'HEADPHONES',
        name: 'Product 1',
        description: 'Description for Product 1',
        reverse: false,
    },
    {
        id: '2',
        imgProduct: Product2Headphone,
        title: 'HEADPHONES',
        name: 'Product 2',
        description: 'Description for Product 2',
        reverse: true,
    },
    {
        id: '3',
        imgProduct: Product3Headphone,
        title: 'HEADPHONES',
        name: 'Product 2',
        description: 'Description for Product 2',
        reverse: true,
    },

    // Ajoutez plus de produits ici
];

export default products;
