import React from 'react'
import Imagen from '../../../assets/close.svg'
import { Table } from '../Table/Table'
import styles from './CartModal.module.css'
import useCartContext from '../../../context/CartProvider'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

interface MyComponentProps {
    setShow: () => void
}

const CartModal: React.FC<MyComponentProps> = ({setShow}) => {

    const {state} = useCartContext()

    const navigate = useNavigate()

    const controlCheckout = () => {
        if(state.cartItems.length >= 1){
            navigate('/checkout')
            setShow()
        } else {
            toast.error('Para ir al checkout tiene que haber minimo 1 producto en el carro')
        }
    }

  return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={setShow}>
            <img src={Imagen} alt="Close" />
        </button>
        <Table />
        <div className={styles.modalButtonContainer}>
            <button onClick={controlCheckout}>Checkout</button>
        </div>
    </div>
  )
}

export default CartModal