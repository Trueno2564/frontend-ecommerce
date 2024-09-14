"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation"
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";


export default function Page() {
    const params = useParams()
    const { productSlug } = params;

    const { result }: ResponseType = useGetProductBySlug(productSlug)

    console

    if (result === null) {
        return <SkeletonProduct />
    }

    return (
        <div className="max-w-6xl py-4 px-6 mx-auto sm:py-32 sm:px-24 lg:min-h-[80vh] w-full">
            <div className="grid sm:grid-cols-2">
                <div m-6>
                    <CarouselProduct images={result[0].attributes.images}  />
                </div>

                <div className="sm:px-12">
                    <InfoProduct product={result[0]} />
                </div>
            </div>
        </div>
    )
}