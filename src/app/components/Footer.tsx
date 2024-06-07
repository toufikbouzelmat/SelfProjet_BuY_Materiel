import Link from "next/link";
import Image from "next/image";
import facebook from "@/../../public/facebook.svg"
import twitter from "@/../../public/twitter.svg"
import instagram from "@/../../public/instagram.svg"

export default function Footer()
{
    return (
        <div className="w-[100%] h-[450px] bg-black flex justify-center">
            <div className="w-[80%] h-[100%] ">
                <div className="w-[100px] h-[5px] bg-[#D87D4A]">
                </div>
                <div className="w-full h-[97%]  flex justify-between">
                    <div className="w-[50%] h-full  flex flex-col justify-around">
                        <h1 className="text-white font-bold">audioPhile</h1>
                        <p className="text-[#aba8a8] text-left">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                        <p className="text-[#aba8a8]">Copyright 2021. All Rights Reserved</p>
                    </div>
                    <div className="w-[50%] h-full  flex flex-col justify-around">
                       <div className="flex justify-between mx-2 text-white ">
                            <Link href="/" className="hover:text-[#D87D4A]" >HOME</Link>
                            <Link href="/Headphones/" className="hover:text-[#D87D4A]">HEADPHONES</Link>
                            <Link href="/Speakers/" className="hover:text-[#D87D4A]">SPEAKERS</Link>
                            <Link href="/Eraphones/" className="hover:text-[#D87D4A]">EARPHONES</Link>
                       </div>
                       <div className="flex justify-end ">
                            <Image src={facebook} alt="facebook" className="hover:bg-[#D87D4A]"/>
                            <Image src={twitter} alt="twitter" className="hover:bg-[#D87D4A]"/>
                            <Image src={instagram} alt="instagram" className="hover:bg-[#D87D4A]" />
                       </div>
                       <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}