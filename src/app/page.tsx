import { ProductCoverImage } from "@/ui/atoms/PriductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export default function Home() {
	return (
		<section>
			<ProductCoverImage src="/product_1.png" alt="kubek" />
			<ProductListItemDescription product={{ category: "kategoria", name: "Kubek", price: 2137 }} />
		</section>
	);
}
