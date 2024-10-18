import { useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.css'
import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { Product } from '../../interfaces/product'
import { createProduct } from '../../service/products'

const Dashboard = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const userLogin = localStorage.getItem('userLogin')

        if(!userLogin){
            navigate('/login')
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('userLogin')
        navigate('/login')
    }

    const [product, setProduct] = useState({
        amiiboSeries: '',
        character: '',
        gameSeries: '',
        head: '',
        image: '',
        name: '',
        release: '',
        tail: '',
        type: '',
        price: 0
    })

    const {amiiboSeries, character, gameSeries, head, image, name, release, tail, type, price} = product

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const mutation = useMutation((newProduct: Product) => {
        return createProduct(newProduct)
        
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutation.mutate(product)
    }


  return (
    <div className={styles.container}>
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.formControlLogin}>
                <label htmlFor="amiiboSeries">Amiibo Series</label>
                <input type="text" name="amiiboSeries" id="amiiboSeries" value={amiiboSeries} required onChange={handleChange} />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="character">Character</label>
                <input type="text" name="character" id="character" value={character} required onChange={handleChange} />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="gameSeries">Game Series</label>
                <input type="text" name="gameSeries" id="gameSeries" value={gameSeries} required onChange={handleChange} />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="head">Head</label>
                <input type="text" name="head" id="head" value={head} required onChange={handleChange} />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="image">Image</label>
                <input type="url" name="image" id="image" value={image} required onChange={handleChange} />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} required onChange={handleChange} />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="release">Release Date</label>
                <input type="date" name="release" id="release" value={release} onChange={handleChange}  />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="tail">Tail</label>
                <input type="text" name="tail" id="tail" value={tail} required onChange={handleChange} />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="type">Type</label>
                <input type="text" name="type" id="type" value={type} required onChange={handleChange} />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" value={price} required onChange={handleChange} />
            </div>
            <div className={styles.formControlLogin}>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    </div>
  )
}

export default Dashboard