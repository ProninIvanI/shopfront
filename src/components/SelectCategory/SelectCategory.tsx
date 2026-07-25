import type { Dispatch, SetStateAction } from "react";
import styles from "./SelectCategory.module.css";
import type { SelectedCategory } from "../../types/product";

type SelectCategoryProps = {
  selectedCategory: SelectedCategory;
  setSelectedCategory: Dispatch<SetStateAction<SelectedCategory>>;
};

export function SelectCategory({
  selectedCategory,
  setSelectedCategory,
}: SelectCategoryProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="category-type" className={styles.label}>Категории</label>
      <select
      id="category-type"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value as SelectedCategory)}
      >
        <option value="all">Всё</option>
        <option value="electronics">Электроника</option>
        <option value="kitchenUtensils">Куханная утварь</option>
        <option value="clothes">Одежда</option>
        <option value="tools">Инструменты</option>
      </select>
    </div>
  );
}
