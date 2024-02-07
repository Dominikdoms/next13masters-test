import { ProductCoverImage } from "@/ui/atoms/PriductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

type Props = {};
export const ProductListItem = ({}: Props) => {
	return (
		<li>
			<article>
				<ProductCoverImage src="/product_1.png" alt="kubek" />
				<ProductListItemDescription
					product={{ category: "kategoria", name: "Kubek", price: 2137 }}
				/>
			</article>
		</li>
	);
};
