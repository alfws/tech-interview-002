import { NextRequest, NextResponse } from "next/server";
import {PRODUCT_URL} from "@/app/settings";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    const res = await fetch(PRODUCT_URL).then((res) => res.json());
    
    const products = res.products
        .map((product: any) => {
            return {
                'id': product.id,
                'title': product.title,
                'price': product.price,
                'rating': product.rating,
                'category': product.category,
                'reviewAverageRating': (product.reviews.reduce((sum: number, review: any) => sum + review.rating, 0) / product.reviews.length).toFixed(2),
                'images': product.images
            }
        })
        .filter((product: any) => {
            if(searchParams.get('rating')){
                const rating = Number(searchParams.get('rating'));
                if(Math.round(product.reviewAverageRating) < rating){
                    return false;
                }
            }
            if(searchParams.get('priceMin')){
                const priceMin = Number(searchParams.get('priceMin'));
                if(product.price < priceMin){
                    return false;
                }
            }
            if(searchParams.get('priceMax')){
                const priceMax = Number(searchParams.get('priceMax'));
                if(product.price > priceMax){
                    return false;
                }
            }
            return true;
        });
    
    return NextResponse.json({
        'products': products,
    }, { status: 200 });
}