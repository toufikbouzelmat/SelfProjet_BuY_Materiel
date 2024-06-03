import Image from "next/image"
import CarteDevice from "./CarteDevice"
import casquedevice from "@/../../public/casquedevice.svg"
import baf from "@/../../public/baf.svg"
import earphones from "@/../../public/Group 5.svg"



export default function ListDevice()
{

    const cardsData = [
        {
            imageSrc: casquedevice,
            title: 'HEADPHONES',
        },
        {
            imageSrc: baf,
            title: 'SPEAKERS',
        },
        {
            imageSrc: earphones,
            title: 'ERAPHONES',
        }
    ];

    return (
        <div className="w-[100%] h-fit   flex justify-center ">
            <div className="w-[80%] h-full  flex md:flex-row flex-col justify-center ">
            
                {cardsData.map((card,index) => (
                    <CarteDevice 
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                    />

                ))}
            </div>
        </div>
    )
}