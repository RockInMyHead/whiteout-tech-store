import heroHeadphones from "@/assets/hero-headphones.png";
import productWatch from "@/assets/product-watch.png";
import productEarbuds from "@/assets/product-earbuds.png";
import productSpeaker from "@/assets/product-speaker.png";
import productPhone from "@/assets/product-phone.png";
import productCharger from "@/assets/product-charger.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Nova Headphones",
    price: 349,
    category: "Аудио",
    image: heroHeadphones,
    description: "Беспроводные наушники премиум-класса с активным шумоподавлением и 30 часами автономной работы.",
  },
  {
    id: "2",
    name: "Pulse Watch",
    price: 499,
    category: "Часы",
    image: productWatch,
    description: "Смарт-часы с AMOLED-дисплеем, мониторингом здоровья и водозащитой.",
  },
  {
    id: "3",
    name: "Air Pods Pro",
    price: 199,
    category: "Аудио",
    image: productEarbuds,
    description: "Компактные беспроводные наушники с кристально чистым звуком.",
  },
  {
    id: "4",
    name: "Echo Speaker",
    price: 129,
    category: "Аудио",
    image: productSpeaker,
    description: "Портативная Bluetooth-колонка с мощным басом и защитой от воды.",
  },
  {
    id: "5",
    name: "Ultra Phone",
    price: 999,
    category: "Смартфоны",
    image: productPhone,
    description: "Флагманский смартфон с камерой 200 МП и быстрой зарядкой.",
  },
  {
    id: "6",
    name: "Power Pad",
    price: 79,
    category: "Аксессуары",
    image: productCharger,
    description: "Беспроводная зарядная станция с поддержкой быстрой зарядки 15W.",
  },
];
