import type { Product } from "../types/product";
import wirelessHeadphonesImage from "../images/wireless-headphones.webp";
import smartWatchImage from "../images/smart-watch.webp";
import foodSteamerImage from "../images/food-steamer.webp";
import fryingPanImage from "../images/frying-pan.webp";
import chefKnifeImage from "../images/chef-knife.webp";
import knifeSharpenerImage from "../images/knife-sharpener.webp";
import wristWatchImage from "../images/wrist-watch.webp";
import fedoraHatImage from "../images/fedora-hat.webp";
import sunglassesImage from "../images/sunglasses.webp";
import clawHammerImage from "../images/claw-hammer.webp";
import cordlessDrillImage from "../images/cordless-drill.webp";
import phillipsScrewdriverImage from "../images/phillips-screwdriver.webp";

export const products: Product[] = [
  {
    id: 1,
    name: "Беспроводные наушники",
    price: 4990,
    rating: 4.8,
    category: "electronics",
    imageUrl: wirelessHeadphonesImage,
    oldPrice: 6500,
  },
  {
    id: 2,
    name: "Умные часы",
    price: 7800,
    rating: 4.8,
    category: "electronics",
    imageUrl: smartWatchImage,
  },
  {
    id: 3,
    name: "Пароварка",
    price: 11300,
    rating: 3.5,
    category: "electronics",
    imageUrl: foodSteamerImage,
  },
  {
    id: 4,
    name: "Сковорода",
    price: 3500,
    rating: 4.8,
    category: "kitchenUtensils",
    imageUrl: fryingPanImage,
  },
  {
    id: 5,
    name: "Нож шефа",
    price: 5499,
    rating: 4.7,
    category: "kitchenUtensils",
    imageUrl: chefKnifeImage,
    oldPrice: 6500,
  },
  {
    id: 6,
    name: "Точилка ножей",
    price: 588,
    rating: 4.7,
    category: "kitchenUtensils",
    imageUrl: knifeSharpenerImage,
  },
  {
    id: 7,
    name: "Часы",
    price: 4990,
    rating: 4.8,
    category: "clothes",
    imageUrl: wristWatchImage,
    oldPrice: 6500,
  },
  {
    id: 8,
    name: "Шляпа",
    price: 1250,
    rating: 4.8,
    category: "clothes",
    imageUrl: fedoraHatImage,
  },
  {
    id: 9,
    name: "Очки",
    price: 950,
    rating: 3.5,
    category: "clothes",
    imageUrl: sunglassesImage,
  },
  {
    id: 10,
    name: "Молоток",
    price: 599,
    rating: 4.8,
    category: "tools",
    imageUrl: clawHammerImage,
  },
  {
    id: 11,
    name: "Шуроповёрт",
    price: 5499,
    rating: 4.7,
    category: "tools",
    imageUrl: cordlessDrillImage,
  },
  {
    id: 12,
    name: "Крестовая отвёртка",
    price: 699,
    rating: 4.7,
    category: "tools",
    imageUrl: phillipsScrewdriverImage,
  },
];
