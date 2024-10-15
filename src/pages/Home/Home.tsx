import { useEffect, useState } from 'react'
import Hero from '../../components/ui/Hero/Hero'
import styles from './Home.module.css'
import CardProduct from '../../components/ui/CardProduct/CardProduct'

const Home = () => {
    const [page, setPage] = useState(0)

    const [products, setProducts] = useState([])

    async function getProducts(page: number){
        try{
            const res = await fetch(`http://localhost:3000/products?_page=${page}&_limit=24`)
            const data = await res.json()
            setProducts(data)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        getProducts(page)
    }, [page])

    console.log(products)
    

  return (
    <div>
        <Hero />
        <div className={styles.container}>
            {products.map((i, index) => (
                <CardProduct key={index} product={i}/>
            ))}
        </div>
    </div>
  )
}

export default Home