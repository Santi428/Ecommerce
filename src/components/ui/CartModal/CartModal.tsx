import styles from './CartModal.module.css'
import Imagen from '../../../assets/close.svg'
import React from 'react'

interface MyComponentProps {
    setShow: () => void
}

const CartModal: React.FC<MyComponentProps> = ({setShow}) => {
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
                <tr>
                    <td>name</td>
                    <td><button className={styles.modalButtonRemove}>-1</button></td>
                    <td>12</td>
                    <td><button className={styles.modalButtonAdd}>+1</button></td>
                </tr>
            </tbody>
        </table>
        <div className={styles.modalTotalContainer}>
            <h3>Total: 300</h3>
        </div>
        <div className={styles.modalButtonContainer}>
            <button>Checkout</button>
        </div>
    </div>
  )
}

export default CartModal