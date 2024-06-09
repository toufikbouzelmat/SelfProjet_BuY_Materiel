import CarteProductRecommend from "./CarteProductRecommend";

export default function ProductRecommendation()
{
    return (
        <div className="w-[100%] h-[500px]  mt-6 flex justify-center">
            <div className="w-[80%] h-full  flex justify-between border-2">
                <CarteProductRecommend />
            </div>
        </div>
    )
}