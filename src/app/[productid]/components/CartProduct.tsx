import Image from "next/image"


export default function CartProduct({imgProduct, title, name, description, reverse }: any)
{
    return (
            <div className="w-full h-[500px]  flex justify-center mt-16">
                <div className={`w-[80%] h-full flex justify-between ${reverse ? 'flex-row-reverse' : ''}`}>
                    <div className="border-2 w-[500px]  h-full flex justify-center items-center bg-[#e9e8e8]">
                        <Image src={imgProduct} alt="Product1Headphone" />
                    </div>
                    <div className=" w-[500px] h-full flex flex-col justify-center  gap-7">
                        <h1 className="text-[#D87D4A] ml-20 tracking-[.50em]">{title}</h1>
                        <h3 className="font-bold ml-20">{name}</h3>
                        <p className="text-[#c9c9c9] ml-20">{description}</p>
                        <button className="text-white text-center w-[160px] h-[48px] bg-[#D87D4A] mt-6 ml-20">SEE PRODUCT</button>
                    </div>
                </div>
            </div>
    )
}