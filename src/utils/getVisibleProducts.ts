import type { Product, ProductSort, SelectedCategory } from "../types/product";

type GetVisibleProductsParams = {
  products: Product[];
  searchString: string;
  selectedCategory: SelectedCategory;
  selectedSort: ProductSort;
};

export function getVisibleProducts({
  products,
  searchString,
  selectedCategory,
  selectedSort,
}: GetVisibleProductsParams): Product[] {
  const normaleSearch = searchString.toLocaleLowerCase().trim();
  const filteredProducts  = () => {
    switch (selectedSort) {
      case "none":
        return [...products];
      case "alphabet":
        return [...products].sort((a, b) =>
          a.name.localeCompare(b.name, "ru"),
        );
      case "reverseAlphabet":
        return [...products].sort((a, b) =>
          b.name.localeCompare(a.name, "ru"),
        );
      case "coinAscending":
        return [...products].sort((a, b) => a.price - b.price);
      case "coinNotAscending":
        return [...products].sort((a, b) => b.price - a.price);
      case "feedbackAscending":
        return [...products].sort((a, b) => a.rating - b.rating);
      case "feedbackNotAscending":
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return [...products];
    }
  };
  const tapeProductsFilterName = filteredProducts().filter((product) =>
    product.name.toLowerCase().includes(normaleSearch),
  );
  return tapeProductsFilterName.filter(
    (product) => {
      if (selectedCategory === "all") return true;
      return product.category === selectedCategory;
    },
  );
}
