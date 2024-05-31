import Image from 'next/image'
import bitmap from '@/../../public/Bitmap.svg'

export default function FirstSection()
{
    return (
        <div className="w-full h-[500px] bg-[#0E0E0E] flex justify-center relative">
            <div className="w-[80%] h-full  relative flex justify-around">
                <div className="w-[398px] h-[70%] md:relative absolute  flex flex-col gap-6 md:items-start items-center justify-center">
                    <h3 className="text-[#817b7b] tracking-[.25em]">NEW PRODUCT</h3>
                    <h1 className="text-[white] text-[20px] md:font-bold text-sm">XX99 Mark II Headphones</h1>
                    <p className="text-[#bfbaba] text-[16px] text-center md:text-left">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button className="w-[160px] h-[48px] text-[white]  bg-[#D87D4A] ">SEE PRODUCT</button>
                </div>
                <div className="  w-[500px] h-full">
                    <Image src={bitmap} alt='casque' className='w-full h-full'/>
                </div>
            </div>
        </div>
    )
}