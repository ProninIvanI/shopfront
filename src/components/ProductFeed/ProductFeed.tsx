import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./ProductFeed.module.css";
import { products } from "../../data/products";
import { Message } from "../Message/Message";
import type { SelectedCategory, ProductSort } from "../../types/product";
import { getVisibleProducts } from "../../utils/getVisibleProducts";

type ProductFeedProps = {
  requestSearch: string;
  sortType: ProductSort;
  selectedCategory: SelectedCategory;
};

export function ProductFeed({
  requestSearch,
  sortType,
  selectedCategory,
}: ProductFeedProps) {
  
  const tapeProductsFilter = getVisibleProducts({products, searchString: requestSearch , selectedCategory, selectedSort: sortType});

  return (
    <section className={styles.container} aria-label="каталог товаров">
      {products.length === 0 ? (
        <Message text={"Нет товаров"} />
      ) : tapeProductsFilter.length === 0 ? (
        <Message text={"Ничего не найдено"} />
      ) : (
        tapeProductsFilter.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
      )}
    </section>
  );
}
