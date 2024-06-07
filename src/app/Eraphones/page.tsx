import HeadphoneProduct from "../Headphones/components/HeadphoneProduct";
import About from "../components/About";
import Footer from "../components/Footer";
import ListDevice from "../components/ListDevice";
import Header from "../components/header";
import ProductEraphones1 from "@/../../public/ProductEraphones1.svg"

export default function Eraphones()
{
    const EraphonesData = [
        {
            imgProduct: ProductEraphones1,
            title: 'NEW PRODUCT',
            name: 'ZX9 SPEAKER',
            description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
        },
    ];

    return (
        <div>
        <Header />
        <div className="w-full h-[150px] bg-black flex justify-center items-center">
          <h1 className="text-white">ERAPHONES</h1>
        </div>
        {
              EraphonesData.map((list, index) => (
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