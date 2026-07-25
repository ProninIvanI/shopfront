import type { Dispatch, SetStateAction } from "react";
import styles from "./StringSearch.module.css";

type StringSearchProps = {
  requestSearch: string;
  setRequestSearch: Dispatch<SetStateAction<string>>;
};

export function StringSearch({
  requestSearch,
  setRequestSearch,
}: StringSearchProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="product-search" className={styles.label}>Поиск товаров</label>
      <input
        id="product-search"
        type="search"
        value={requestSearch}
        onChange={(event) => setRequestSearch(event.target.value)}
      />
    </div>
  );
}
