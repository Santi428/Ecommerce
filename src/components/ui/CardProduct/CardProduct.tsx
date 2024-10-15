import React from 'react';
import styles from './CardProduct.module.css'


interface Product {
  image: string;
  name: string;
  type: string;
  price: number;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
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
        <button className={styles.cardButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
