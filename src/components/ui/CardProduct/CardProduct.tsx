import React from 'react';
import styles from './CardProduct.module.css'
import useCartContext from '../../../context/CartProvider';
import { CartProduct, Product } from '../../../interfaces/product';
import { toast } from 'sonner';


interface CardProps {
  product: Product;
}


const Card: React.FC<CardProps> = ({ product }) => {

  const {dispatch} = useCartContext()

  const item: CartProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1
  }

  const addToCart = (item: CartProduct) => {
    dispatch({type:'ADD', payload: item})
    toast.success('Product added to cart')
  } 

  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={product.image} alt={product.name} />
      <div className={styles.cardDetail}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <div className={styles.cardBody}>
          <p className={styles.cardType}>{product.type}</p>
          <p className={styles.cardPrice}>
            price <small>{product.price}</small>
          </p>
        </div>
        <button className={styles.cardButton} onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
