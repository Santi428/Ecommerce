import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import styles from './CardCredit.module.css'
import React, { useState } from 'react'
import { toast } from 'sonner'
import useCartContext from '../../../context/CartProvider'
import { CartProduct } from '../../../interfaces/product'

export const CardCredit = () => {

    const {dispatch} = useCartContext()

    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: ''
    })

    const {number, name, expiry, cvc} = cardData

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            [e.target.name]: e.target.value
        })
    }

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            focus: e.target.name
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        

        if([number, name, expiry, cvc].includes('')){
            return toast.error('Datos de tarjeta incompletos')
        }

        setCardData({
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focus: ''
        })

        dispatch({type: 'CLEAR_CART', payload: {} as CartProduct})
    }

  return (
    <div className={styles.container}>
        <div>
            <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={cardData.focus}/>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.formControl}>
                <label htmlFor="number">Card Number</label>
                <input type="text" name='number' id='number' value={number} onChange={handleInputChange} onFocus={handleInputFocus} />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' value={name} onChange={handleInputChange} onFocus={handleInputFocus} />
            </div>
            <div className={styles.formInputGrup}>
                <div className={styles.formControl}>
                    <label htmlFor="expiry">Card Expiry</label>
                    <input type="text" name='expiry' id='expiry' value={expiry} onChange={handleInputChange} onFocus={handleInputFocus} />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="cvc">Card cvc</label>
                    <input type="text" name='cvc' id='cvc' value={cvc} onChange={handleInputChange} onFocus={handleInputFocus} />
                </div>
            </div>
            <button type='submit' className={styles.buyButton}>Buy Now!</button>
        </form>
    </div>
  )
}
