import type { Dispatch, SetStateAction } from "react";
import styles from "./SelectSort.module.css";
import type { ProductSort } from "../../types/product";

type SelectSortProps = {
  sortType: ProductSort;
  setSortType: Dispatch<SetStateAction<ProductSort>>;
};

export function SelectSort({ sortType, setSortType }: SelectSortProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="sort-type" className={styles.label}>Сортировки</label>
      <select
      id="sort-type"
        value={sortType}
        onChange={(e) => setSortType(e.target.value as ProductSort)}
      >
        <option value="none">без сортировок</option>
        <option value="alphabet">сортировка А-Я</option>
        <option value="reverseAlphabet">сортировка Я-А</option>
        <option value="coinAscending">от дешёвых к дорогим</option>
        <option value="coinNotAscending">от дорогих к дешёвым</option>
        <option value="feedbackAscending">по отзывам от большего</option>
        <option value="feedbackNotAscending">по отзывам от меньшего</option>
      </select>
    </div>
  );
}
