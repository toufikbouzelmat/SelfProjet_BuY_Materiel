import Link from "next/link";

export default function CarteProductRecommend()
{
    return (
        <div className="w-[300px] h-full bg-[red] flex flex-col items-center gap-8">
            <div className="w-[300px] h-[300px] bg-[blue]">

            </div>
            <h1>XX99 MARK I</h1>
            <Link  href=""
                     className="text-white  w-[160px] h-[48px] bg-[#D87D4A] flex items-center justify-center">SEE PRODUCT</Link>
        </div>
    )
}