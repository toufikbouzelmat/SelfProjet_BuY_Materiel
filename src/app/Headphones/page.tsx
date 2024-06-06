import Header from "../components/header";
import HeadphoneProduct from "./components/HeadphoneProduct";
import Product1Headphone from "@/../../public/Product1Headphone.svg"
import Product2Headphone from "@/../../public/Product2Headphone.svg"
import Product3Headphone from "@/../../public/Product3Headphone.svg"

export default function Headphones()
{
    const cardsData = [
        {
            imgProduct: Product1Headphone,
            title: 'NEW PRODUCT',
            name: 'XX99 Mark II Headphones',
            description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        },
        {
            imgProduct: Product2Headphone,
            title: '',
            name: 'XX99 Mark II Headphones',
            description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        },
        {
            imgProduct: Product3Headphone,
            title: '',
            name: 'XX59 Mark II Headphones',
            description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
        },
    ];
    return (
        <div className="w-full h-full ">
            <Header />
            <div className="w-full h-[150px] bg-black flex justify-center items-center">
                <h1 className="font-bold text-white">HEADPHONES</h1>
            </div>
            {
                cardsData.map((list, index) => (
                    <HeadphoneProduct 
                        key = {index}
                        imgProduct = {list.imgProduct}
                        title = {list.title}
                        name = {list.name}
                        description = {list.description}
                        reverse={index % 2 !== 0}
                    />
                ))

            }
        </div>
    )
}