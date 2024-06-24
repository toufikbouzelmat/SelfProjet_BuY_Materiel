import Image from "next/image"
import ItemsProduct from "./ItemsProduct";
import { MouseEvent, useEffect, useRef, useState } from "react";
import  router, { useRouter }  from "next/navigation"
import { useCart } from "./CartContext"

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
}


export default function CardProduit({imgProduct, title, name, price, description, reverse }: any, { product }: { product: Product })
{

    const { addToCart } = useCart();
    const { cart, clearCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        setshowpop(true);
    };
    const router = useRouter();

        const [showpop, setshowpop] = useState(false);

        const toggleButtonRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
        if (
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target as HTMLDivElement)
                ) 
                    {
                        setshowpop(false);
                    }
  };


  useEffect(() => {
    document.addEventListener(
      "click",
      handleClickOutside as unknown as (event: Event) => void
    );

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside as unknown as (event: Event) => void
      );
    };
  }, [showpop]);
   

    return (
        <>
        <div className="w-full h-[500px]  flex justify-center mt-16">
    
            <div className={`w-[80%] h-full flex justify-between  ${reverse ? 'flex-row-reverse' : ''}`}>
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
                            <button className="text-white" onClick={handleAddToCart}>ADD TO CART</button>
                        </div>
                    </div>
            
                </div>
          
            </div>
        </div>
        
        {showpop ? (
            <div className="fixed top-0 left-0 w-[100%] h-full bg-[black]  flex items-center justify-center bg-opacity-40 " >
                <div className="w-[80%] h-full flex  items-center justify-end">

                    <div ref={toggleButtonRef} className="w-[350px] h-[450px]  bg-[white]">
                        <div  className="w-[300px] h-[420px]  mx-6 my-4 flex flex-col ">
                            <div className="w-full h-[60px]  flex justify-between items-center">
                                <div className="font-bold tracking-[.20em]">{cart.length}</div>
                                <button className="text-[#C2C2C2] underline decoration-solid" onClick={clearCart}>Remove all</button>
                            </div>
                            <div className="w-full h-[300px] ">
                                <ItemsProduct />
                            </div>
                            <div className="w-full h-[40px] flex justify-between items-center">
                                <div className="text-[#C2C2C2]">Total</div>
                                <div className="font-bold ">
                                    ${cart.reduce((total, product) => total + price, 0)}
                                </div>
                            </div>
                            <div className="w-full h-[60px] bg-[#D87D4A] flex items-center justify-center">
                                <button className="text-[white]" onClick={() => router.push("./../Checkout") }>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ): null}

    </>
    )
    
}