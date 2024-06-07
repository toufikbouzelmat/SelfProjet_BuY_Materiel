"use client"
import Link from "next/link";
import { useRouter } from 'next/router';
import Header from "./../components/header";
import CartProduct from "./components/CartProduct";
import Product1Headphone from "@/../../public/Product1Headphone.svg"
import Product2Headphone from "@/../../public/Product2Headphone.svg"
import Product3Headphone from "@/../../public/Product3Headphone.svg"



export default function Product()
{
    const router = useRouter();
    const { imgProduct, title, name, description, reverse } = router.query;

    if (!router.isReady) {
        return <div>Loading...</div>; // Ou un indicateur de chargement si vous préférez
    }

    return (
        
        <div>
            <Header />
            <div className="w-[100%] h-[50px] flex justify-center">
                <div className="w-[80%] h-full flex mt-12">
                    <Link href="/Headphones/" className="hover:text-[#D87D4A] text-[#8b8b8b]">Go Back</Link>
                </div>
                <CartProduct 
                imgProduct={imgProduct} 
                title={title} 
                name={name} 
                description={description} 
                reverse={reverse === 'true'} // Convertir string en booléen
            />
       
            </div>
        </div>

    )
}