import Image from "next/image"

export default function PhotoProducts()
{
    return (
        <div className="w-[100%] h-[500px]  mt-6 flex justify-center">
            <div className="w-[80%] h-full  flex justify-between">
                <div className="w-[48%] bg-[green] flex flex-col justify-between">
                    <div className="w-full h-[48%] bg-[blue]"></div>
                    <div className="w-full h-[48%] bg-[black]"></div>
                </div>
                <div className="w-[50%] bg-[red]">

                </div>
            </div>
        </div>
    )
}