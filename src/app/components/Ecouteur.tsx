import ecouteurs from "@/../../public/ecouteurs.svg"
import Image from "next/image"

export default function Ecouteur()
{
    return (
        <div className="w-[100%] h-[250px] flex justify-center mt-4">
            <div className="w-[80%]  h-full flex justify-around">
                <div className="w-[500px] h-full flex ">
                    <Image src={ecouteurs} alt="ecouteurs" className="w-full h-full"/>
                </div>
                <div className="w-[500px] h-full bg-[#979797] flex flex-col justify-center items-center">
                    <h1 className="font-bold tracking-wide">YX1 EARPHONES</h1>
                    <button className="text-white text-center w-[160px] h-[48px] border-2 border-[black] mt-6">SEE PRODUCT</button>
                </div>
            </div>
        </div>
    )
}