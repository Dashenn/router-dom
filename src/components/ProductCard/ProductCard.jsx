import React from 'react';
import styles from './ProductCard.module.css'

const ProductCard = ({product, currency, exchange}) => {
    return (
        <li className={styles.productCard}>
            <img src={product.image ? product.image : product.images[0]} alt="" className={styles.productCardImage}/>
            <div className={styles.productCardInfoBlock}>
                <p className={styles.productCardTitle}>{product.title}</p>
                <p className={styles.productCardPrice}>{currency} {(product.price * exchange).toFixed(2)}</p>
                <p className={styles.productCardDescription}>{product.description}</p>
                <button className={styles.productCardButton}>Add to cart</button>
            </div>
        </li>
    );
};

export default ProductCard;