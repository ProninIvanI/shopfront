import { describe, expect, it } from "vitest";
import type { Product } from "../types/product";
import { getVisibleProducts } from "./getVisibleProducts";

const testProducts: Product[] = [
  {
    id: 1,
    name: "Беспроводные наушники",
    price: 4990,
    rating: 4.8,
    category: "electronics",
    imageUrl: "headphones.png",
    oldPrice: 6500,
  },
  {
    id: 2,
    name: "Умные часы",
    price: 7800,
    rating: 4.8,
    category: "electronics",
    imageUrl: "headphones.png",
  },
  {
    id: 8,
    name: "Шляпа",
    price: 1250,
    rating: 4.8,
    category: "clothes",
    imageUrl: "headphones.png",
  },
  {
    id: 7,
    name: "неУмные часы",
    price: 5200,
    rating: 4.8,
    category: "electronics",
    imageUrl: "headphones.png",
    oldPrice: 6500,
  },
]

describe("getVisibleProducts", () => {
  it("ищет товар без учёта регистра", () => {
    // Arrange
    const searchString = "НАУШНИКи"
    // Act
    const result = getVisibleProducts({
      products: testProducts,
      searchString,
      selectedCategory: 'all',
      selectedSort: 'none'
    });
    // Assert
    expect(result).toHaveLength(1)
    expect(result[0]?.name).toBe('Беспроводные наушники');
  });

  it("проверяет фильрацию по категории", () => {
    // Arrange
    const selectedCategory = "electronics"
    // Act
    const result = getVisibleProducts({
      products: testProducts,
      searchString: '',
      selectedCategory,
      selectedSort: 'none'
    });
    // Assert
    expect(result).toHaveLength(3)
    expect(
      result.every((product) => product.category === 'electronics')
    ).toBe(true)
  });

  it("проверка сортировки", () => {
    // Arrange
    const selectedSort = "coinAscending";
    // Act
    const result = getVisibleProducts({
      products: testProducts,
      searchString: '',
      selectedCategory: 'all',
      selectedSort
    });
    // Assert
    expect(result).toHaveLength(4)
    expect(result.map((product)=>product.id)).toEqual([8, 1, 7, 2])
  });
  it("комбинированная сортировка", () =>{
    // Arrange
    const selectedCategory = "electronics";
    const selectedSort = "coinNotAscending";
    const searchString = "часы"
    // Act
    const result = getVisibleProducts({
      products: testProducts,
      searchString,
      selectedCategory,
      selectedSort,
    });
    // Assert
    expect(result).toHaveLength(2)
    expect(result.every((product) => product.category === 'electronics')).toBe(true)
    expect(result.map((product) => product.name)).toEqual(["Умные часы", "неУмные часы"])
    expect(result.map((product) => product.id)).toEqual([2, 7])
  });
});
