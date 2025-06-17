import { notFound } from "next/navigation"

export default async function Review({params}:{params:Promise<{productId:string,reviewId:string}>}){
    const {productId,reviewId}=await params
    if(parseInt(reviewId)>30){
        notFound()

    }
    return <>
    <h1>review {reviewId} Product details{productId}</h1>
    </>
}