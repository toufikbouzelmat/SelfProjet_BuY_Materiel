export  default function ItemsProduct()
{
    return (
        <div className="w-full h-[80px]  flex justify-between">
            <div className="w-[180px] h-full  flex items-center gap-1">
                <div className="w-[70px] h-[70px] bg-[#DDD6D6]"></div>
                <div className="w-[100px] h-[60px]  flex flex-col justify-evenly ">
                    <div className="w-[100px] h-[30px] font-medium">XX99 MK II</div>
                    <div className="w-[100px] h-[30px] text-[#C2C2C2]">$ 2,999</div>
                </div>
            </div>
            <div className="w-[90px] h-full  flex justify-center items-center">
                <div className="w-full h-[50%] flex justify-around items-center bg-[#DDD6D6]">
                    <button className="text-[#969292] font-bold">-</button>
                    <div className="font-semibold	">1</div>
                    <button className="text-[#969292] font-bold">+</button>
                </div>
            </div>
        </div>
    )
}