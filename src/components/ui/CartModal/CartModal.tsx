import styles from './CartModal.module.css'
import Imagen from '../../../assets/close.svg'
import React from 'react'
import useCartContext from '../../../context/CartProvider'

interface MyComponentProps {
    setShow: () => void
}

const CartModal: React.FC<MyComponentProps> = ({setShow}) => {

    const {state, dispatch} = useCartContext()

    const totalValue = () => {
        let total = 0
        state.cartItems.map((i) => total += i.price * i.quantity)
        return total
    }

  return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={setShow}>
            <img src={Imagen} alt="Close" />
        </button>
        <table className={styles.modalTable}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Delete</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
            {state.cartItems.map((i) => (
                <tr key={i.id}>
                    <td>{i.name}</td>
                    <td><button className={styles.modalButtonRemove} onClick={() => dispatch({type: 'REMOVE', payload: i})}>-1</button></td>
                    <td>{i.quantity}</td>
                    <td><button className={styles.modalButtonAdd} onClick={() => dispatch({type: 'ADD', payload: i})}>+1</button></td>
                </tr>
            ))}
            </tbody>
        </table>
        <div className={styles.modalTotalContainer}>
            <h3>Total: ${totalValue()},00</h3>
        </div>
        <div className={styles.modalButtonContainer}>
            <button>Checkout</button>
        </div>
    </div>
  )
}

export default CartModal