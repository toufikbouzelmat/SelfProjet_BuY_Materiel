import Header from "../components/header";
import HeadphoneProduct from "./components/HeadphoneProduct";
import Product1Headphone from "@/../../public/Product1Headphone.svg"
import Product2Headphone from "@/../../public/Product2Headphone.svg"
import Product3Headphone from "@/../../public/Product3Headphone.svg"
import ListDevice from "../components/ListDevice";
import About from "../components/About";
import Footer from "../components/Footer";
import products from "../products/products";

export default function Headphones()
{
    // const cardsData = [
    //     {
    //         id: '1',
    //         imgProduct: Product1Headphone,
    //         title: 'NEW PRODUCT',
    //         name: 'XX99 Mark II Headphones',
    //         description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    //     },
    //     {
    //         id: '2',
    //         imgProduct: Product2Headphone,
    //         title: '',
    //         name: 'XX99 Mark II Headphones',
    //         description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    //     },
    //     {
    //         id: '3',
    //         imgProduct: Product3Headphone,
    //         title: '',
    //         name: 'XX59 Mark II Headphones',
    //         description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    //     },
    // ];
    return (
        <div className="w-full h-full ">
            <Header />
            <div className="w-full h-[150px] bg-black flex justify-center items-center">
                <h1 className="font-bold text-white">HEADPHONES</h1>
            </div>
            {
                products.map((list, index) => (
                    <HeadphoneProduct 
                        key = {index}
                        id = {list.id}
                        imgProduct = {list.imgProduct}
                        title = {list.title}
                        name = {list.name}
                        description = {list.description}
                        reverse={index % 2 !== 0}
                    />
                ))

            }
            <div className="mt-20">
                <ListDevice />
            </div>
            <div className="mt-20">
                <About />
            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    )
}