"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import shop from "@/../../public/shop.svg"
import { useRouter } from 'next/navigation';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toHeadphones = () => {
        router.push(`Headphones/`)
    }

    return (
        <div className="w-full h-[100px] bg-[#101010] text-white flex items-center justify-center">
        <div className="w-[80%] h-full flex justify-between items-center border-b-2 border-b-[white]">
            <div className="sm:hidden" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="sm:flex ">Logo</div>
            <div className={`flex  flex-col gap-4 ${menuOpen ? 'flex' : 'hidden'} sm:flex sm:flex-row`}>
                <Link href="./"  className="hover:text-[#D87D4A]">HOME</Link>
                <Link href="/Headphones/"  className="hover:text-[#D87D4A]">HEADPHONES</Link>
                <Link href="/Speakers/" className="hover:text-[#D87D4A]">SPEAKERS</Link>
                <Link href="/Eraphones/" className="hover:text-[#D87D4A]">EARPHONES</Link>
            </div>
            <div className="sm:flex ">
                <Image src={shop} alt="Shop" className="w-full h-full"/>
            </div>
        </div>
    </div>
    )
}