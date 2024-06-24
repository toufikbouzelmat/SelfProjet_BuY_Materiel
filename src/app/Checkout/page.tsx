"use client"
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/Footer";
import InputCheckout from "./components/InputCheckout";
import Image from "next/image";
import Dilvery from "@/../../public/delivery.svg";
import iconsValide from "@/../../public/iconValide.svg";
import { useState } from "react";

export default function Checkout()
{
    const [Emoney, setEmoney] = useState(true);
    const [CashDilvery, setCashDilvery] = useState(false);
    const [Confirmation, setConfirmation] = useState(false);

    const handleEmoneyClick = () => {
        setEmoney(true);
        setCashDilvery(false);
    };iconsValide

    const handleCashDilveryClick = () => {
        setCashDilvery(true);
        setEmoney(false);
    };

    const handleConfirmationClick = ()  => {
        setConfirmation(true);
    }

    return  (
        <>
            <div>
                <Header />
                <div className='w-[100%] h-[100px] flex justify-center bg-[#DCDCDC]'>
                    <div className='w-[80%] h-full  flex items-center'>
                            <Link href="/Headphones/" className='text-[#9a9a9a]'>Go Back</Link>
                    </div>
                </div>
                <div className="w-full  h-[1320px] flex justify-center  bg-[#DCDCDC]">
                    <div className="w-[80%] h-[100%] flex  justify-between bg-[#DCDCDC]">
                        <div className="w-[830px] h-[90%] bg-[white] flex justify-center rounded-lg">
                            <div className="w-[80%] h-full ">
                                <h1 className="font-bold  my-8 text-[46px]">CHECKOUT</h1>
                                <h3 className="text-[#D87D4A] my-6 font-bold">BILLING DETAILS</h3>
                                <div className="w-full h-[100px]   flex  my-2">
                                    <InputCheckout title="Name" />
                                    <InputCheckout title="Email Address"/>
                                </div>
                                <div className="w-full h-[100px] my-2">
                                    <InputCheckout title="Phone Number" />
                                </div>
                                <h3 className="text-[#D87D4A] my-6 font-bold">SHIPPING DETAILS</h3>
                                <div className="w-full h-100px">
                                    <h2 className="font-bold">Address</h2>
                                    <input className="rounded w-full h-[60px] my-2 border-2 border-[#DCDCDC]" ></input>
                                </div>
                                <div className="w-full h-[100px]   flex  my-2">
                                    <InputCheckout title="Zip Code" />
                                    <InputCheckout title="City"/>
                                </div>
                                <div className="w-full h-[100px] my-2">
                                    <InputCheckout title="Country" />
                                </div>
                                <h3 className="text-[#D87D4A] my-6 font-bold">PAYMENT DETAILS</h3>
                                <div className="w-full h-[200px] ">
                                    <div className="w-full h-[200px]  flex justify-between">
                                        <h2 className="w-[150px] h-[35px] font-bold  my-4">Payment Method</h2>
                                        <div className="w-[500px] h-full flex flex-col items-end">
                                            <button  className="w-[300px] h-[60px] rounded border-2  border-[#DCDCDC] mr-7 flex items-center" onClick={handleEmoneyClick}>
                                                <div className="w-[34px] h-[34px] border-2 border-[#DCDCDC] rounded-full mx-2 flex justify-center items-center">
                                                    {Emoney && <div className="w-[24px] h-[24px] bg-[#D87D4A] rounded-full "></div>}
                                                </div>
                                                <h4 className="">e-Money</h4>
                                            </button>
                                            <button  className="w-[300px] h-[60px] my-2 rounded border-2  border-[#DCDCDC] mr-7 flex items-center" onClick={handleCashDilveryClick}>
                                                <div className="w-[34px] h-[34px] border-2 border-[#DCDCDC] rounded-full mx-2 flex justify-center items-center">
                                                    {CashDilvery && <div className="w-[24px] h-[24px] bg-[#D87D4A] rounded-full "></div>}
                                                </div>
                                                <h4 className="">Cash on Delivery</h4>
                                            </button>
                                        </div>
                                    </div>
                                    {!CashDilvery && Emoney && (
                                            <div className="w-full h-[200px] flex ">
                                                <InputCheckout title="e-Money Number" />
                                                    <InputCheckout title="e-Money Pin"/> 
                                            </div>
                                    )}
                                        
                                    {!Emoney && CashDilvery &&  (
                                            <div className="w-full h-[200px] flex gap-4">
                                                <Image alt="Delivry"  src={Dilvery} className="w-[64px] h-[64px]  "/>
                                                <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                                            </div>

                                    )}

                                </div>
                            </div>
                        </div>
                        <div className="w-[350px] h-[610px] bg-[white] rounded-lg flex flex-col justify-center items-center">
                            <div className="w-[310px] h-[600px] flex flex-col">
                                <h1 className="my-6 mx-2 font-bold text-[22px]">SUMMARY</h1>

                                <div className="w-full h-[80px]  flex justify-between my-2 ">
                                    <div className="w-[180px] h-full  flex items-center gap-1">
                                        <div className="w-[70px] h-[70px] bg-[#DDD6D6]"></div>
                                        <div className="w-[100px] h-[60px]  flex flex-col justify-evenly ">
                                            <div className="w-[100px] h-[30px] font-medium">XX99 MK II</div>
                                            <div className="w-[100px] h-[30px] text-[#C2C2C2]">$ 2,999</div>
                                        </div>
                                    </div>
                                    <div className="w-[90px] h-full  flex justify-center items-center text-[#DCDCDC] font-bold text-[20px]">
                                            1x
                                    </div>
                                </div>

                                <div className="w-full h-[250px]  flex flex-col">
                                    <div className="w-full h-[30px] flex justify-between">
                                        <h3 className="text-[#DCDCDC]">TOTAL</h3>
                                        <h1 className="font-bold">$ 5,999</h1>
                                    </div>
                                    <div className="w-full h-[30px] flex justify-between">
                                        <h3 className="text-[#DCDCDC]">SHIPPING</h3>
                                        <h1 className="font-bold">$50</h1>
                                    </div>
                                    <div className="w-full h-[50px] flex justify-between">
                                        <h3 className="text-[#DCDCDC]">VAT (INCLUDED)</h3>
                                        <h1 className="font-bold">$ 1,005</h1>
                                    </div>
                                    <div className="w-full h-[50px] flex justify-between">
                                        <h3 className="text-[#DCDCDC]">GRAND TOTAL</h3>
                                        <h1 className="font-bold text-[#D87D4A]">$ 5,446</h1>
                                    </div>
                                    <button className="w-full h-[50px] bg-[#D87D4A] text-center text-[white]" onClick={handleConfirmationClick}>CONTINUE & PAY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {Confirmation  ?  (

                        <div className="fixed top-0 left-0 w-[100%] h-full bg-[black]  flex items-center justify-center bg-opacity-40 " >
                            <div className="w-[540px] h-[481px] flex  bg-[white] items-center justify-center">
                                <div  className="w-[85%] h-[98%] flex flex-col">
                                    <div className="w-full h-[100px] mt-8">
                                        <div className="w-[64px]  h-[64px] bg-[#D87D4A] rounded-full flex justify-center items-center">
                                            <Image src={iconsValide} alt="Valide"  className="w-[54px] h-[54px]" />
                                        </div>
                                    </div>
                                    <div className=" text-[22px]  font-bold">
                                        <h2>THANK YOU</h2>
                                        <h2>FOR YOUR ORDERR</h2>
                                    </div>
                                    <p className="text-[#DCDCDC] text-[16px] font-bold my-4">You will receive an email confirmation shortly.</p>
                                    <div className="w-full h-[150px] flex justify-between">
                                        <div className="w-[60%] h-full bg-[#DEDEDE] flex flex-col justify-center items-center">
                                            <div className="w-[80%] h-[90%]   flex flex-col justify-around">
                                                    <div className="w-full h-[60px] border-2 flex justify-between items-center">
                                                        <div className="w-[54px] h-[54px] border-2"></div>
                                                        <div className="flex flex-col">
                                                            <h4>XX99 II</h4>
                                                            <h4>$2,999</h4>
                                                        </div>
                                                        <div>1x</div>
                                                    </div>
                                                    <div className="border-2 border-[white]"></div>
                                                    <div className="w-full h-[30px]  text-center  font-bold">and 2 other items</div>
                                            </div>
                                        </div>
                                        <div className="w-[40%] h-full bg-[black] flex flex-col justify-center ">
                                            <h2 className="text-[#DFDFDF] px-6">GRAND TOTAL</h2>
                                            <h2 className="text-[white] px-6">$ 5,999</h2>
                                        </div>
                                    </div>
                                    <button className="w-full h-[40px] bg-[#D87D4A] text-center text-[white] my-4">BACK TO HOME</button>
                                </div>
                            </div>
                        </div>
                ):null}
                <Footer />
            </div>
        </>
    )
}