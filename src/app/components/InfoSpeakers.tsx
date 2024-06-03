import BigSpeakers from "@/../../public/speakerbigTaille.svg"
import Image from "next/image"
export default function InfoSpeakers()
{
    return (
        <div className="w-[100%] h-[500px]  flex justify-center mt-4">
            <div className="w-[80%] h-full bg-[#D87D4A] flex justify-center gap-7">
                <div className="w-[600px] h-[100%] border-2 border-[#FFF] rounded-full relative flex justify-center items-center">
                    <div className="w-[500px] h-[70%] border-2 border-[#FFF] rounded-full absolute flex justify-center items-center">
                        <div className="w-[420px] h-[70%] border-2 border-[#FFF] rounded-full absolute ">
                        
                        </div>
                    </div>
                <Image src={BigSpeakers} alt="BigSpeaker" className=" absolute w-[290px]"/>
                </div>
                <div className="w-[349px] h-[303px]  mt-9 ">
                    <h1 className="text-white font-bold  text-[50px] tracking-tight leading-none">ZX9<br />SPEAKER</h1>
                    <p className="text-white mt-6">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <button className="text-white text-center w-[160px] h-[48px] bg-[#4C4C4C] mt-6">SEE PRODUCT</button>
                </div>
            </div>
        </div>
        
    )
}