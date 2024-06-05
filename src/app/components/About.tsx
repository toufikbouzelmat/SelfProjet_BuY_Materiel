import Image from "next/image"
import Perso from "@/../../public/personnee.svg"

export default function About()
{
    return (
        <div className="w-[100%] h-[500px] mt-4 flex justify-center">
            <div className="w-[80%] h-full  flex  justify-between">
                <div className="w-[40%] h-full flex flex-col justify-center items-center  gap-7">
                    <div className="text-black font-bold">BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR</div>
                    <p className="mx-6 text-[#828181] text-center">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div className="w-[50%] h-full">
                    <Image src={Perso} alt="PersonneInfo" className="h-full"/>
                </div>
            </div>
        </div>
    )
}