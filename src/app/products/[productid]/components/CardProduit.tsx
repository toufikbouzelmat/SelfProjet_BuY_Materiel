import Image from "next/image"
import { useState } from "react";

export default function CardProduit({imgProduct, title, name, description, reverse }: any)
{

        const [showpop, setshowpop] = useState(false);

   

    return (
        <div className="w-full h-[500px]  flex justify-center mt-16">
            <div className={`w-[80%] h-full flex justify-between ${reverse ? 'flex-row-reverse' : ''}`}>
                <div className="border-2 w-[500px]  h-full flex justify-center items-center bg-[#e9e8e8]">
                    <Image src={imgProduct} alt="Product1Headphone" />
                </div>
                <div className=" w-[500px] h-full flex flex-col justify-center  gap-7">
                    <h1 className="text-[#D87D4A] ml-20 tracking-[.50em]">{title}</h1>
                    <h3 className="font-bold ml-20">{name}</h3>
                    <p className="text-[#c9c9c9] ml-20">{description}</p>
                    <h2 className="text-black font-extrabold ml-20">$ 2,999</h2>
                    <div className="w-[300px] h-[50px]  ml-20 flex justify-between">
                        <div className="w-[100px] h-full bg-[#F1F1F1] flex  justify-around items-center">
                            <button className="text-[#9a9a9a]">-</button>
                            <div>1</div>
                            <button className="text-[#9a9a9a]">+</button>
                        </div>
                        <div className="w-[180px] h-full bg-[#D87D4A] flex justify-center items-center">
                            <button className="text-white" onClick={() => setshowpop(true)}>ADD TO CART</button>
                        </div>
                    </div>
                    
                </div>
            {/* {showpop &&
             <div className="w-full h-full  bg-black opactity-[60%]">
            </div>} */}
            </div>
        </div>
    )
}