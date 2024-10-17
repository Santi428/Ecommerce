import { Product } from "../interfaces/product"

export async function getProducts(page: number): Promise<Product[]>{
    try{
        const res = await fetch(`http://localhost:3000/products?_page=${page}&_limit=24`)

        if(res.ok){
            const data = await res.json()
            return data
        } else {
            throw new Error('Failed to fetch products')
        }
    } catch(error){
        throw new Error('Network error')
    }
}