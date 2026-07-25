import styles from "./ProductCard.module.css";
import type { Product } from "../../types/product";
import { categoryLabels } from "../../data/categoryLabels";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.container}>
      <div className={styles.containerUnderImage}>
        <img
          className={styles.cardImage}
          alt={product.name}
          src={product.imageUrl}
          loading="lazy"
        />
      </div>

      <h3>{product.name}</h3>
      <p>{categoryLabels[product.category]}</p>
      <p>Цена {product.price} ₽</p>
      {product.oldPrice ? (
        <p className={styles.oldPrice}>Старая цена <del>{product.oldPrice} ₽</del></p>
      ) : (
        ""
      )}
      <p>Рейтинг: {product.rating}</p>
    </article>
  );
}
