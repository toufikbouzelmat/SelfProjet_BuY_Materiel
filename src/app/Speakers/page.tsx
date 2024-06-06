import { isValidElement } from "react";
import Header from "../components/header";
import ProductSpeakers1 from "@/../../public/ProductSpeakers1.svg"
import ProductSpeakers2 from "@/../../public/ProductSpeakers2.svg"
import HeadphoneProduct from "../Headphones/components/HeadphoneProduct";
import ListDevice from "../components/ListDevice";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Speakers()
{

    const SpeakersData = [
        {
            imgProduct: ProductSpeakers1,
            title: 'NEW PRODUCT',
            name: 'ZX9 SPEAKER',
            description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
        },
        {
            imgProduct: ProductSpeakers2,
            title: '',
            name: 'ZX7 SPEAKER',
            description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
        },
    ];

    return (
        <div>
          <Header />
          <div className="w-full h-[150px] bg-black flex justify-center items-center">
            <h1 className="text-white">SPEAKERS</h1>
          </div>
          {
                SpeakersData.map((list, index) => (
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