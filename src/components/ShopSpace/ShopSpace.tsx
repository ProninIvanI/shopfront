import { useState } from "react";
import { ProductFeed } from "../ProductFeed/ProductFeed";
import { StringSearch } from "../StringSearch/StringSearch";
import styles from "./ShopSpace.module.css";
import { SelectSort } from "../SelectSort/SelectSort";
import { SelectCategory } from "../SelectCategory/SelectCategory";
import type { SelectedCategory, ProductSort } from "../../types/product";

export function ShopSpace() {
  const [requestSearch, setRequestSearch] = useState("");
  const [selectedType, setSelectedType] = useState<ProductSort>("none");
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>("all");
  return (
    <div className={styles.container}>
      <div className={styles.containerUnderFilter}>
        <StringSearch
          requestSearch={requestSearch}
          setRequestSearch={setRequestSearch}
        />
        <SelectSort sortType={selectedType} setSortType={setSelectedType} />
        <SelectCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <ProductFeed
        requestSearch={requestSearch}
        sortType={selectedType}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
