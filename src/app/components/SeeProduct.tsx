import seeproduct from "@/../../public/seeproduct.svg"
import Image from "next/image"

export default function SeeProduct()
{
    return (
        <div className="w-[100%] h-[210px]  flex justify-center mt-4">
            <div className="w-[80%] h-full bg-[#c5c4c4] flex justify-around">
                <div className="w-[300px] h-full  gap-6  flex flex-col justify-center items-center">
                    <h1 className="font-bold">ZX7 SPEAKER</h1>
                    <button className="text-white text-center w-[160px] h-[48px] bg-[#1f1f1f] ">SEE PRODUCT</button>
                </div>
                <div className="w-[550px] h-full   flex ">
                    <Image 
                        src={seeproduct}
                        alt="Product"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}