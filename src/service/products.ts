import { Product } from "../interfaces/product"

export async function getProducts(page: number = 0): Promise<Product[]>{
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

export const createProduct = async (product: Product): Promise<Product> => {
    try {
        const response = await fetch('http://localhost:3000/products',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })


        if(response.ok){
            const data = await response.json()
            return data
        } else {
            throw new Error('Failed to create product')
        }


    } catch (error) {
        throw new Error('Network Error')
    }
}