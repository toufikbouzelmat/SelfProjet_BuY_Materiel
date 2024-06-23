import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/Footer";
import InputCheckout from "./components/InputCheckout";

export default function Checkout()
{
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
                                            <button  className="w-[300px] h-[60px] rounded border-2  border-[#DCDCDC] mr-7 flex items-center">
                                                <div className="w-[34px] h-[34px] border-2 border-[#DCDCDC] rounded-full mx-2 flex justify-center items-center">
                                                    <div className="w-[24px] h-[24px] bg-[#D87D4A] rounded-full "></div>
                                                </div>
                                                <h4 className="">e-Money</h4>
                                            </button>
                                            <button  className="w-[300px] h-[60px] my-2 rounded border-2  border-[#DCDCDC] mr-7 flex items-center">
                                                <div className="w-[34px] h-[34px] border-2 border-[#DCDCDC] rounded-full mx-2"></div>
                                                <h4 className="">Cash on Delivery</h4>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full h-[200px] flex ">
                                        <InputCheckout title="e-Money Number" />
                                        <InputCheckout title="e-Money Pin"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[350px] h-[450px] bg-[white] rounded-lg"></div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}