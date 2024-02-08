import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Torba",
		category: "Accessories",
		price: 2137,
		coverImage: {
			src: "/product_1.png",
			alt: "Torba",
		},
	},
	{
		id: "2",
		name: "Koszulka",
		category: "Accessories",
		price: 2137,
		coverImage: {
			src: "/product_2.png",
			alt: "Koszulka",
		},
	},
	{
		id: "3",
		name: "Koszulka z nadrukiem",
		category: "Accessories",
		price: 2137,
		coverImage: {
			src: "/product_3.png",
			alt: "Koszulka z nadrukiem",
		},
	},
	{
		id: "4",
		name: "Doniczka",
		category: "Accessories",
		price: 2137,
		coverImage: {
			src: "/product_4.png",
			alt: "Doniczka",
		},
	},
];
export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
