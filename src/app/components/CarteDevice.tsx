import Image from "next/image"
import cheuvero from "@/../../public/Path.png"
import casquedevice from "@/../../public/casquedevice.svg"


export default function CarteDevice({ imageSrc, title } : any)
{

    return (
        <div className="w-[305px] h-[284px]  ">
            
            <div className="w-[350px] h-[204px]  bg-[#e9e9e9] stroke-[#979797] mt-[76px] flex flex-col items-center gap-4">
                <Image src={imageSrc} alt="" className="w-[122px] h-[160px]  mt-[-80px] stroke-black"/>
                <h1>{title}</h1>
                <button className="flex  items-center gap-2 text-[#acacac] hover:text-[#D87D4A]">SHOP <Image src={cheuvero} alt="" className="w-auto h-auto" /></button>
            </div>
        </div>
    )
}