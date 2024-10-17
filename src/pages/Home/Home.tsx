import { useState } from 'react'
import { useQuery } from 'react-query'
import { Toaster } from 'sonner'
import CardProduct from '../../components/ui/CardProduct/CardProduct'
import Hero from '../../components/ui/Hero/Hero'
import { getProducts } from '../../service/products'
import styles from './Home.module.css'

const Home = () => {
    const [page, setPage] = useState(1)

    const {data, isLoading} = useQuery(['products', page], () => getProducts(page), {keepPreviousData: true})


  return (
    <div>
        <Hero />
        <Toaster richColors/>
        {isLoading && <p>Loading....</p>}
        {/* {error && <p>Somthing went wrong.</p>} */}
        <div className={styles.container}>
            {data?.map((i, index) => (
                <CardProduct key={index} product={i}/>
            ))}
        </div>
        <div className={styles.paginationContainer}>
            <button className={styles.paginationButton} onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>Previus page</button>
            <div className={styles.paginationActive}>
                <span>{page}</span>
            </div>
            <button className={styles.paginationButton} onClick={() => setPage((prev) => prev + 1)}>Next page</button>
        </div>
    </div>
  )
}

export default Home