import { ProductCoverImage } from "@/ui/atoms/PriductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import type { ProductItemType } from "@/ui/types";

type Props = {
	product: ProductItemType;
};
export const ProductListItem = ({ product }: Props) => {
	return (
		<li>
			<article>
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
