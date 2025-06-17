"use client";
import { usePathname } from "next/navigation";



export default function Notfound(){
    const pathname=usePathname()
    const productId=pathname.split('/')[2]
    const review=pathname.split('/')[4]

    return <h1 className="bg-amber-50 rounded-full text-black justify-center hover:bg-amber-300 text-6xl flex"> Review {review}  Not Found productId{productId}</h1>
}