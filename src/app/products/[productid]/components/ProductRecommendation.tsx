import CarteProductRecommend from "./CarteProductRecommend";
import products from "../../products";

export default function ProductRecommendation()
{
    return (
        <div className="w-[100%] h-[500px]  mt-6 flex justify-center">
            <div className="w-[80%] h-full  flex justify-between border-2">
                {
                    products.map((produit, index) => (
                        <CarteProductRecommend />
                    ))
                }
            </div>
        </div>
    )
}