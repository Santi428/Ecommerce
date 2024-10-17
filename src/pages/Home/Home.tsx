import { useEffect, useState } from 'react'
import Hero from '../../components/ui/Hero/Hero'
import styles from './Home.module.css'
import CardProduct from '../../components/ui/CardProduct/CardProduct'
import { getProducts } from '../../service/products'
import { Product } from '../../interfaces/product'
import { Toaster } from 'sonner'

const Home = () => {
    const [page, setPage] = useState(0)

    const [products, setProducts] = useState<Product[]>([])

    const [error, setError] = useState(false)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getProducts(page)
        .then((data) => {
            setProducts(data)
        })
        .catch(() => setError(true))
        .finally(() => setIsLoading(false))
    }, [page])

    // console.log(products)
    

  return (
    <div>
        <Hero />
        <Toaster richColors/>
        {isLoading && <p>Loading....</p>}
        {error && <p>Somthing went wrong.</p>}
        <div className={styles.container}>
            {products.map((i, index) => (
                <CardProduct key={index} product={i}/>
            ))}
        </div>
    </div>
  )
}

export default Home