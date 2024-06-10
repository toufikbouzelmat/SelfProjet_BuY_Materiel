// products.js
import Product1Headphone from "@/../../public/Product1Headphone.svg"
import Product2Headphone from "@/../../public/Product2Headphone.svg"
import Product3Headphone from "@/../../public/Product3Headphone.svg"


const products = [
    {
        id: '1',
        imgProduct: Product1Headphone,
        title: 'NEW PRODUCT',
        name: 'XX99 Mark II Headphones',
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        reverse: false,
    },
    {
        id: '2',
        imgProduct: Product2Headphone,
        title: '',
        name: 'XX99 Mark I Headphones',
        description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
        reverse: true,
    },
    {
        id: '3',
        imgProduct: Product3Headphone,
        title: '',
        name: 'XX59 Headphones',
        description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
        reverse: false,
    },

    // Ajoutez plus de produits ici
];

export default products;
